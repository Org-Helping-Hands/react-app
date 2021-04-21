import React from "react";
import "./enterOtp.css";
import { Link } from "react-router-dom"
export class EnterOtp extends React.Component {
    render() {
        return (
            <>
                <html>
                    <head>
                        <meta charSet="UTF-8"></meta> <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                        <link rel="stylesheet" href="enterOtp.css"></link>
                        <title>sign in</title>
                    </head>

                    <body className="background">

                        <div className="get">
                            <p>Get Started</p>
                        </div>
                        <div className="form">
                            <input type="text" placeholder="OTP"></input>
                        </div>
                        <Link to="home">
                            <button className="next">NEXT</button>
                        </Link>
                        <p className="makeSure">Make sure you are in proper network coverage</p>
                    </body>
                </html>
            </>

        );
    }
}