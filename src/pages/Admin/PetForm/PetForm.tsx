import { useParams } from 'react-router-dom'
import { Panel } from '../../../components/layout/Panel'

import styles from './PetForm.module.css'
import { Button } from '../../../components/common/Button'
import { Input } from '../../../components/common/Input'
import { Select } from '../../../components/common/Select'
import { TextArea } from '../../../components/common/TextArea'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { addPet } from '../../../services/pets/addPet'
import { PictureUpload } from '../../../components/common/PictureUpload'

enum FormStatus {
    ADD = 'add',
    EDIT = 'edit',
}

const petSchema = z.object({
    name: z
        .string()
        .min(2, 'Nome deve ter no mínimo 2 caracteres')
        .max(64, 'Nome deve ter no máximo 64 caracteres'),
    type: z.string(),
    size: z.string(),
    gender: z.string(),
    bio: z
        .string()
        .min(15, 'Sobre deve ter no mínimo 15 caracteres')
        .max(1024, 'Sobre deve ter no máximo 1024 caracteres'),
})

type PetSchema = z.infer<typeof petSchema>

export function PetForm() {
    const { id } = useParams()
    const { register, handleSubmit, formState } = useForm<PetSchema>({
        resolver: zodResolver(petSchema),
    })
    const status = id ? FormStatus.EDIT : FormStatus.ADD

    async function submit({ name, type, size, gender, bio }: PetSchema) {
        const MESSAGE_BY_STATUS = {
            add: {
                loading: `Salvando ${name}`,
                success: `${name} criado com sucesso.`,
                error: `Não foi possível criar ${name}.`,
            },
            edit: {
                loading: `Editando ${name}`,
                success: `${name} editado com sucesso.`,
                error: `Não foi possível editar ${name}.`,
            },
        }

        const toastId = toast.loading(MESSAGE_BY_STATUS[status].loading)

        try {
            const { id } = await addPet({ name, type, size, gender, bio })
            console.log({ id })

            toast.success(MESSAGE_BY_STATUS[status].success, {
                id: toastId,
            })
        } catch {
            toast.error(MESSAGE_BY_STATUS[status].error, {
                id: toastId,
            })
        }
    }

    return (
        <Panel>
            <form className={styles.container} onSubmit={handleSubmit(submit)}>
                <PictureUpload />
                <div className={styles.fields}>
                    <div>
                        <Input label="Nome" {...register('name')} />
                        {formState.errors?.name && (
                            <p className={styles.formError}>
                                {formState.errors?.name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Select
                            label="Espécie"
                            {...register('type')}
                            options={[
                                { value: 'cachorro', text: 'Cachorro' },
                                { value: 'gato', text: 'Gato' },
                            ]}
                        />
                        {formState.errors?.type && (
                            <p className={styles.formError}>
                                {formState.errors?.type.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Select
                            label="Sexo"
                            {...register('gender')}
                            options={[
                                { value: 'femea', text: 'Fêmea' },
                                { value: 'macho', text: 'Macho' },
                            ]}
                        />
                        {formState.errors?.gender && (
                            <p className={styles.formError}>
                                {formState.errors?.gender.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Select
                            label="Porte"
                            {...register('size')}
                            options={[
                                { value: 'pequeno', text: 'Pequeno' },
                                { value: 'medio', text: 'Médio' },
                                { value: 'grande', text: 'Grande' },
                            ]}
                        />
                        {formState.errors?.size && (
                            <p className={styles.formError}>
                                {formState.errors?.size.message}
                            </p>
                        )}
                    </div>
                </div>
                <TextArea label="Sobre" {...register('bio')} />
                {formState.errors?.bio && (
                    <p className={styles.formError}>{formState.errors?.bio.message}</p>
                )}
                <div className={styles.buttons}>
                    <Button type="submit">Salvar dados</Button>
                </div>
            </form>
        </Panel>
    )
}
