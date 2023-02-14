import React from 'react';
import { Link } from "react-router-dom";
import "./Button.css";

const Styles = ["btn--primary", "btn--secondary", "btn--outline"];
const Sizes = ["btn--medium", "btn--large"];

export const Button = ({
    child,
    type,
    onClick,
    buttonSize,
    buttonStyle
}) => {
    const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
    const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];

    return (
        <div>
            <Link to="/contact" className='button-mobile'>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                    {child}
                </button>
            </Link>
        </div>
    );

}