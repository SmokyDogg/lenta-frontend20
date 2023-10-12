import React, { useEffect } from "react";
import notfound404 from "../../images/404.png";
import styles from "./not-found-page.module.css"
import { Button } from "../ui/button/button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    function GoToHome() {
        const navigate = useNavigate();
      
        useEffect(() => {
          setTimeout(() => {
            navigate('/', { replace: true });
          }, 3000);
        }, []);
    }
    return (
        <div className={styles.main}>
            <img className={styles.image} src={notfound404} alt="404" />
            <div className={styles.navigation}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.text}>Запрашиваемая страница не существует, попробуйте вернуться </p>
                <Button
                    text="На главную"
                    extraClass={styles.button}
                    isLoader={false}
                    disabled={true}
                    textClass={styles.text}>
                    onClick={GoToHome()}
                </Button>
            </div>
        </div>
    )

}
