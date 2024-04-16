import { ButtonHTMLAttributes } from "react";
import { ButtonVariant } from "./Button.constants";
import styles from './Button.module.css'


interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
}

export function Button({ variant = ButtonVariant.Default, children, ...rest }: IButton) {
    let buttonClass = styles.buttonBase;

    switch (variant) {
        case ButtonVariant.Default:
            buttonClass += `${styles.buttonDefault}`;
            break;

        case ButtonVariant.Disabled:
            buttonClass += `${styles.buttonDisabled}`;
            break;

        case ButtonVariant.Outlined:
            buttonClass += `${styles.buttonOutlined}`;
            break;

        case ButtonVariant.Text:
            buttonClass += `${styles.buttonText}`;
            break;
    }

    return (<button className={buttonClass} {...rest}>{children}</button>)
}