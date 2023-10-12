import React from "react";
import styles from "./button.module.css"
import loaderIcon from "../../../images/Rolling-1.3s-201px.svg"

export const Button = ({
  text,
  extraClass = "",
  type = "button",
  isLoader = false,
  disabled,
  textClass = "",
  ...rest
}) => {
  const className = `text text_type_button text_color_primary ${
    styles.button
  }
    isLoader && styles.loader
  } ${extraClass}`;

  return (
    <button
      className={className}
      type="button"
      disabled={isLoader || disabled}
      {...rest}
    >
      {isLoader ? (
        <img className={styles.loader_icon} src={loaderIcon} alt="Загрузка." />
      ) : (
        <>
          <p className={textClass}>{text}</p>
        </>
      )}
    </button>
  );
};
