import { InputHTMLAttributes, Ref, forwardRef } from 'react'
import styles from './Input.module.css'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

function ForwardInput({ label, ...rest }: IInput, ref: Ref<HTMLInputElement>) {
    return (
        <div className={styles.inputGroup}>
            <label>{label}</label>
            <input ref={ref} {...rest} />
        </div>
    )
}

export const Input = forwardRef(ForwardInput)
