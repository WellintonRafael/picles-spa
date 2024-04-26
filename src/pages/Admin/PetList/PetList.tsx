import { Link } from 'react-router-dom'
import { Button } from '../../../components/common/Button'
import { Panel } from '../../../components/layout/Panel'

import styles from './PetList.module.css'

export function PetList() {
    return (
        <Panel>
            <div className={styles.container}>
                <div className={styles.buttonNewPet}>
                    <Link to="/admin/pets/new">
                        <Button>Novo pet</Button>
                    </Link>
                </div>
            </div>
        </Panel>
    )
}
