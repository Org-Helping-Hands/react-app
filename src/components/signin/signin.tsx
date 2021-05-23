import React from "react";
import styles from "./signin.module.css";
import { auth } from "../../Services/Firebase";
import { setPhoneNumber, setToken, setUserId } from "../../common/user";
import axios from "axios";
export class Signin extends React.Component{
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
            let url = "http://localhost:3001/user/signin";
            axios
              .post(url, { idToken, name: this.state.name })
              .then(async (_) => {
                if (_auth.currentUser) {
                  setUserId(_auth.currentUser.uid);
                } else {
                  new Error("Failed to get userId, please try again later");
                }

                setToken(idToken);
                setPhoneNumber(this.state.phoneNumber);
                // TODO: Not use any
                (this.props as any).history.push("/home");
              });
          });
        }
      });
  };

    render(){
        return (
            <>
            <div ref={(ref) => (this.recaptcha = ref)}></div>
            <h1 className={styles.center}>Helping Hands </h1>
    <p className={styles.getting}>getting Started</p>
    <div className={styles.form}>
        <p>NAME</p>
        <input type="text" name="username" placeholder="Name" size={10}
        value={this.state.name}
        onChange={(event) => {
          this.setState({ ...this.state, name: event.target.value });
        }}/>
        <p>PHONE NUMBER</p>
        <input type="text" name="mobno" placeholder="+91" size={10}
        value={this.state.phoneNumber}
        onChange={(event) => {
          this.setState({ ...this.state, phoneNumber: event.target.value });
        }}/>
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
          <button className="next" onClick={this.onSendotp}>
            NEXT
          </button>
        )}

        {this.state.otpSend && (
          <button className="next" onClick={this.onConfirmOtp}>
            Comfirm
          </button>
        )}
        <button>NEXT</button>
        <p className={styles.makeSure}>Make sure you are in proper network coverage</p>
    </div>
            </>
        );
    }
}
