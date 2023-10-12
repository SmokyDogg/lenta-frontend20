import React from "react";
import logo from "../../images/logo.svg"
import user from "../../images/ic_user.svg"
import styles from "./app-header.module.css"

export const AppHeader = () => {
    return (
        <div className={styles.main}>
            <img className={styles.logo} src={logo} alt="Лента и точка" />
            <div className={styles.profile}>
                <p className={styles.username}>Станислав Горбачев</p>
                <img className={styles.userlogo} src={user} alt="Иконка ЛК" />
            </div>
        </div>
    )
}