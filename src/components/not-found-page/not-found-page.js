import React, { useEffect } from "react";
import notfound404 from "../../images/404.png";
import styles from "./not-found-page.module.css"
import { Button } from "../ui/button/button";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../app-header/app-header";

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <img className={styles.image} src={notfound404} alt="404" />
                <div className={styles.navigation}>
                    <h1 className={styles.title}>404</h1>
                    <p className={styles.text}>Запрашиваемая страница не существует, попробуйте вернуться </p>
                    <Button
                        className={styles.button}
                        onClick={() => navigate('/')}>
                        На главную
                    </Button>
                </div>
            </div>

        </div>
    )

}
