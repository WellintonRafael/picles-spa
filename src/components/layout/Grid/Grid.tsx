import styles from './Grid.module.css'
import { ReactNode } from 'react'

interface IGrid {
    children: ReactNode
}

export function Grid({children}: IGrid) {
    return <div className={styles.grid}>{children}</div>
}
