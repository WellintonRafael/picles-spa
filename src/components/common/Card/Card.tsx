import { Link } from 'react-router-dom'
import { ImageBase64 } from '../ImageBase64/ImageBase64'
import styles from './Card.module.css'

interface ICard {
    href: string
    text: string
    thumb: string
}

export function Card({ href, text, thumb }: ICard) {
    return (
        <Link to={href} className={styles.card}>
            <ImageBase64 src={thumb}/>
            <span>{text}</span>
        </Link>
    )
}
