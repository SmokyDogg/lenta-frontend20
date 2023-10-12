import React from "react";
import styles from "./input.module.css"

export const Input = ({
    placeholder = "Введите текст",
    extraClass = "",
    type = "text",
    maxLength,
    max,
    isLimitText = false,
    ...rest
  }) => {
    const limitText =
      type === "text"
        ? `Максимум — ${maxLength} символа`
        : `Максимальное число — ${max}`;
  
    return (
      <div className={`${styles.content} ${extraClass}`}>
        <input
          className={styles.input}
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
          {...rest}
        />
        {isLimitText && (
          <span className={styles.span}>
            {limitText}
          </span>
        )}
      </div>
    );
  };