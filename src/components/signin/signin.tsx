import React from "react";
import "./signin.css";
import { Link } from "react-router-dom"
export class Signin extends React.Component {
    render() {
        return (
            <>
                <html lang="en">
                    <head>
                        <meta charSet="UTF-8"></meta>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                        <link rel="stylesheet" href="signin.css"></link>
                        <title>sign in</title>
                    </head>


                    <body>
                        <div className="get">
                            <p>Get Started</p>
                        </div>



                        <div className="form">
                            <input type="text" placeholder="Name"></input>
                            <input type="text" placeholder="Phone Number"></input>
                        </div>
                        <Link to="enterotp">
                            <button className="next">NEXT</button>
                        </Link>

                        <p className="makeSure">Make sure you are in proper network coverage</p>
                    </body>
                </html>

            </>
        );
    }
}