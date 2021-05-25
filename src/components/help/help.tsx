import React from "react";
import styles from "./help.module.css";

export class help extends React.Component {
    render() {
        return (
            <>
                <div>
                    <img className={styles.arrow}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRBmWl9vq2wqCJOU6Jql1-3X7fRdCNdBiKKlKxUhAhNlD7My2a9UtGOYxgHrIDzaG8Oc&usqp=CAU" />
                    <p className={styles.top}>Needy people near you</p>
                    <div className={styles.div}></div>
                    <p className={styles.bottom}>Following location posted by siddhesh</p>
                    <div className={styles.buttons}>
                        <button className={styles.btn}>Mark as helped</button>
                        <button className={styles.btn2}>Mark as missing</button>
                    </div>
                </div>

            </>
        )
    }
}