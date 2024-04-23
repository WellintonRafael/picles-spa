import { IPet } from "../../interfaces/pet";
import httpClient from "../api/httpClient";

export async function getPetById(id: string): Promise<IPet> {
    try {
        const response = await httpClient.get(`/pet/${id}`)
        
        return response.data;
    }
    catch(error) {
        console.error('Erro ao buscar Pet por id');
        throw error;
    }
}