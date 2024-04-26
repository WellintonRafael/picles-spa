import { forwardRef, Ref, SelectHTMLAttributes } from 'react'
import styles from './Select.module.css'

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    options: {
        value: string
        text: string
    }[]
}

function FowardedSelect(
    { label, options, ...rest }: ISelect,
    ref: Ref<HTMLSelectElement>
) {
    return (
        <div className={styles.selectGroup}>
            <label>{label}</label>
            <select className={styles.selectBase} ref={ref} {...rest}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    )
}

const Select = forwardRef(FowardedSelect)
export { Select }
