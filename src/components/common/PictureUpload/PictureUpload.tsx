import { ChangeEvent, Ref, forwardRef } from 'react'

import styles from './PictureUpload.module.css'
import { ImageBase64 } from '../ImageBase64/ImageBase64'

interface PictureUploadProps {
  value?: string
  onChange?: (base64String: string) => void
}

function ForwardedPictureUpload(
  { value, onChange }: PictureUploadProps,
  ref: Ref<HTMLInputElement>
) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const fileReader = new FileReader()

      fileReader.onload = () => {
        const result = fileReader.result as string

        if (onChange) {
          onChange(result)
        }
      }

      fileReader.readAsDataURL(event.target.files[0])
    }
  }

  return (
    <>
      <input
        ref={ref}
        id="photo-upload"
        className={styles.hiddenInput}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      <label htmlFor="photo-upload" className={styles.pictureUpload}>
        <ImageBase64 src={value} />
        <span>Selecionar foto...</span>
      </label>
    </>
  )
}

const PictureUpload = forwardRef(ForwardedPictureUpload)
export { PictureUpload }
