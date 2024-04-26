import { IPet } from '../../interfaces/pet'
import httpClient from '../api/httpClient'

export async function updatePicture(
    petId: string,
    form: FormData
): Promise<IPet> {
    try {
        const response = await httpClient.put(`/pet/${petId}/photo`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return response.data
    } catch (error) {
        console.error('Erro ao adicionar pet:', error)
        throw error
    }
}
