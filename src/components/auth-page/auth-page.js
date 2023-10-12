import React, { useState } from "react";
import styles from "./auth-page.module.css"
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { AppHeader } from "../app-header/app-header";

export const Auth = () => {
    return (
        <div>
            <AppHeader/>
            <h1 className={styles.main}>Авторизация</h1>
            <form className={styles.form}>
                <Input
                    placeholder={"Введите e-mail"}
                    maxLength={100}
                    isLimitText={false}
                    max={150}
                />
                <Input
                    placeholder={"Введите пароль"}
                    maxLength={100}
                    isLimitText={false}
                    max={150}
                />
                <Button 
                    text="Войти"
                    extraClass={styles.button}
                    isLoader={false}
                    disabled={true}
                    textClass={styles.text}
                    />
            </form>
        </div>

    )
}