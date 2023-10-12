import React from "react";
import styles from "./button.module.css"
import loaderIcon from "../../../images/Rolling-1.3s-201px.svg";
import PropTypes from 'prop-types';
import classNames from "classnames";

export const Button = ({
  children, onClick, className, disabled, active
}) => {
  const classes = classNames(
    'btn',
    className, 
    { active }
  )

  return(
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool
}

Button.defaultProps = {
  children: "Кнопка",
  className: "",
  disabled: false,
  active: false
}
