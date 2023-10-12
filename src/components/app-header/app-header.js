import React from "react";
import logo from "../../images/logo.svg"
import user from "../../images/ic_user.svg"
import styles from "./app-header.module.css"
import { useNavigate } from "react-router-dom";

export const AppHeader = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.main}>
            <img className={styles.logo} src={logo} alt="Лента и точка" onClick={() => navigate('/')}/>
            <div className={styles.profile}>
                {/* <p className={styles.username}>Войти</p> */}
                {/* <img className={styles.userlogo} src={user} alt="Иконка ЛК" /> */}
            </div>
        </div>
    )
}