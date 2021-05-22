import React from "react";
import styles from "./signin.module.css";
export class Signin extends React.Component{
    render(){
        return (
            <>
            <h1 className={styles.center}>Helping Hands </h1>
    <p className={styles.getting}>getting Started</p>
    <div className={styles.form}>
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