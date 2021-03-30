import React from "react";
import "./enterOtp.css";
export class EnterOtp extends React.Component{
    render(){
        return (
            <>
            <h1 className="center">Helping Hands </h1>
                <p className="getting">getting Started</p>
                <div className="form">
                    <p>PHOBE NUMBER</p>
                    <input type="text" name="mobno" placeholder="+91" size={10}/>
                    <p>OTP</p>
                    <input type="text" name="OTP" placeholder="ENTER OTP" size={10}/>
                    <button>NEXT</button>
                </div>
            </>
        );
    }
}