import { IUpdateShelterRequest, IUpdateShelterResponse } from "../../interfaces/shelter";
import httpClient from "../api/httpClient";

export async function updateShelter(params: IUpdateShelterRequest): Promise<IUpdateShelterResponse> {
    try {
        const response = await httpClient.put<IUpdateShelterResponse>('/shelter', params)
        return response.data
    }
    catch(error) {
        console.log('Erro ao atualizar abrigo', error)
        throw error
    }
}
