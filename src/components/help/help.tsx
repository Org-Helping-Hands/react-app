import React from "react";
import styles from "./help.module.css";

export class help extends React.Component {
    render() {
        return (
            <>
                <div>
                    <img className={styles.arrow}
                        src="/assets/find-needy/arrow.jpg" />
                    <p className={styles.top}>Needy people near you</p>
                    <div className={styles.div}></div>
                    <span>
                        <i className={`iconify ${styles.tag}`} data-icon="akar-icons:water"></i>
                        <i className={`iconify ${styles.tag}`} data-icon="emojione-monotone:pot-of-food"></i>
                        <i className={`iconify ${styles.tag}`} data-icon="mdi-hospital-box"></i>
                    </span>
                    <p className={styles.bottom}>Needy food and water and shelter will also help. Also it will be nice if you donate your old clothes</p>


                    <span className={`iconify-wrapper `}>
                        <i className={`iconify ${styles.hicons}`} data-icon="akar-icons:cross"></i>
                    </span>
                    <span className={`iconify-wrapper `}>
                        <i className={`iconify ${styles.shicons}`} data-icon="akar-icons:check" data-inline="false"></i>
                    </span>

                </div>

            </>
        )
    }
}