import React from "react";
import styles from "./signin.module.css";
import { auth } from "../../Services/Firebase";
import { setPhoneNumber, setToken, setUserId } from "../../common/user";
import axios from "axios";
import { configs } from "../../configs";
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
        callback: (response: any) => { },
      }
    );
  }
  recaptcha: any;

  confirmationResult: any;
  onSendotp = () => {
    const phoneNumber = this.state.phoneNumber;
    const appVerifier = (window as any).recaptchaVerifier;
    auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.confirmationResult = confirmationResult;
        // ...
        this.setState({ ...this.state, otpSend: true });
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };

  onConfirmOtp = () => {
    let credential = auth.PhoneAuthProvider.credential(
      this.confirmationResult.verificationId,
      this.state.otp
    );
    auth()
      .signInWithCredential(credential)
      .then(() => {
        let _auth = auth();
        if (_auth.currentUser) {
          _auth.currentUser.getIdToken(true).then((idToken) => {
            let url = configs.apiBaseUrl + "/user/signin";
            axios
              .post(url, { idToken, name: this.state.name })
              .then(async ({ data }) => {
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
      });
  };

  render() {
    return (
      <>
        <div ref={(ref) => (this.recaptcha = ref)}></div>
        <div className={styles.get1}>
          <p>Get Started</p>
        </div>

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
          {!this.state.otpSend && (
            <button className={styles.next1} onClick={this.onSendotp}>
              Get OTP
            </button>
          )}

          {this.state.otpSend && (
            <button className={styles.next1} onClick={this.onConfirmOtp}>
              Comfirm
            </button>
          )}
          <p className={styles.makeSure1}>
            Make sure you are in proper network coverage
          </p>
        </div>
      </>
    );
  }
}
