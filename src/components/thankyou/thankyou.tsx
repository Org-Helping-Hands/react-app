import React from "react";
import styles from "./thankyou.module.css"
export class Thankyou extends React.Component {

    render() {
        return (
            <>
            <div className={styles.text1}>
                <p>Hi Siddhesh, Thanks for your</p>
                <p>contribution to Helping hands</p> 
            </div>
            <div className={styles.img}>
      
            </div>
            <div className={styles.head1}><h2>Thank You</h2></div>
            <div className={styles.text2}>
                <p>Change the world by being yourself,</p>
                <p> <a className={styles.anchor} href="#">Keep Helping...</a></p>
            </div>
            <div className={styles.text3}> 
                <p>If you have much, give of your wealth, if you have little, give of your heart.</p>
                <div className={styles.para2}><p>- Arabian Proverb</p></div> 
        </div>
        </>
        );
    }
}