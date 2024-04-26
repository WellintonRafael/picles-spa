import { forwardRef, Ref, TextareaHTMLAttributes } from 'react'

import styles from './TextArea.module.css'

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

function FowardedTextArea(
  { label, ...rest }: ITextArea,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <div className={styles.textareaGroup}>
      <label>{label}</label>
      <textarea ref={ref} {...rest} />
    </div>
  )
}

const TextArea = forwardRef(FowardedTextArea)
export { TextArea }
