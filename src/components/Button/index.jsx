import React from 'react'
import './Button.css';

const Button = (props) => {
    return (
      <button
        type="button"
        className={props.className}
        onClick={props.onClick}
      >
        <span className="buttonText">{props.buttonName}</span>
      </button>
    )
}

export default Button;
