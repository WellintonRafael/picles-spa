import { ReactNode } from "react";
import styles from './Panel.module.css'
import { Sidebar } from "../../common/Sidebar";

interface IPanel {
    children: ReactNode
}

export function Panel({ children }: IPanel) {
    return <div className={styles.panel}>
        <Sidebar />
        <main className={styles.content}>{children}</main>
    </div>
}