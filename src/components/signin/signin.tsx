import React from "react";
import styles from "./signin.module.css";
import { auth } from "../../Services/Firebase";
import { setPhoneNumber, setToken, setUserId } from "../../common/user";
import { handleHttpError, signIn, toggleSpinner } from "../../common/api";
export class Signin extends React.Component {
  state = {
    otpSend: false,
    verified: false,
    phoneNumber: "+91",
    otp: "",
    name: "",
  };
  componentDidMount() {
    (window as any).recaptchaVerifier = new auth.RecaptchaVerifier(
      this.recaptcha,
      {
        size: "invisible",
        callback: (response: any) => {},
      }
    );
  }
  recaptcha: any;

  confirmationResult: any;
  onSendotp = () => {
    const phoneNumber = this.state.phoneNumber;
    const appVerifier = (window as any).recaptchaVerifier;
    toggleSpinner.next(true);

    auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        toggleSpinner.next(false);
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.confirmationResult = confirmationResult;
        // ...
        this.setState({ ...this.state, otpSend: true });
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        toggleSpinner.next(false);
        handleHttpError(error);
      });
  };

  onConfirmOtp = () => {
    let credential = auth.PhoneAuthProvider.credential(
      this.confirmationResult.verificationId,
      this.state.otp
    );
    toggleSpinner.next(true);
    auth()
      .signInWithCredential(credential)
      .then(() => {
        toggleSpinner.next(false);
        let _auth = auth();
        if (_auth.currentUser) {
          _auth.currentUser.getIdToken(true).then((idToken) => {
            signIn(idToken, this.state.name).then(async ({ data }) => {
              if (_auth.currentUser) {
                setUserId(_auth.currentUser.uid);
              } else {
                new Error("Failed to get userId, please try again later");
              }

              setToken(data.newToken);
              setPhoneNumber(this.state.phoneNumber);

              // TODO: Not use any
              (this.props as any).history.push("/home");
            });
          });
        }
      }).catch(e=>{
        handleHttpError(e)
        toggleSpinner.next(false)
      });
  };

  render() {
    return (
      <>
        <div ref={(ref) => (this.recaptcha = ref)}></div>
        <nav className={styles.get1}>
          <p>Get Started</p>
        </nav>

        <div className={styles.form1}>
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ ...this.state, name: event.target.value });
            }}
          />
          <input
            type="text"
            name="mobno"
            placeholder="Phone number"
            value={this.state.phoneNumber}
            onChange={(event) => {
              this.setState({ ...this.state, phoneNumber: event.target.value });
            }}
          />
          {this.state.otpSend && (
            <input
              className="form-control"
              type="text"
              placeholder="Enter otp"
              value={this.state.otp}
              onChange={(event) => {
                this.setState({ ...this.state, otp: event.target.value });
              }}
            />
          )}
          <div style={
            {
              display:"flex"
            }
          }>
          <button
              className={styles.next1}
              onClick={this.onSendotp}
              disabled={
                !(this.state.name && this.state.phoneNumber.length === 13)
              }
            >
              {this.state.otpSend?"Resend otp":"Get OTP"}
            </button>

          {this.state.otpSend && (
            <button className={`${styles.next1} ${styles["margin-left"]}`} onClick={this.onConfirmOtp}>
              Comfirm
            </button>
          )}
          </div>
           

          <p className={styles.makeSure1}>
            Make sure you are in proper network coverage
          </p>
        </div>
      </>
    );
  }
}
