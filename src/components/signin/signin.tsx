import React from "react";
import "./signin.css";
export class Signin extends React.Component{
    render(){
        return (
            <>
            <h1 className="center">Helping Hands </h1>
    <p className="getting">getting Started</p>
    <div className="form">
        <p>NAME</p>
        <input type="text" name="username" placeholder="Name" size={10}/>
        <p>PHONE NUMBER</p>
        <input type="text" name="mobno" placeholder="+91" size={10}/>
        <button>NEXT</button>
    </div>
            </>
        );
    }
}