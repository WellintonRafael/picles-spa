import { useQuery } from "@tanstack/react-query";
import { getPets } from "../services/pets/getPets";
import { GetPetsRequest, GetPetsResponse } from "../interfaces/pet";

interface IUsePetList {
    data?: GetPetsResponse
    isLoading: boolean
}

export function usePetList(params: GetPetsRequest): IUsePetList {
    const { data, isLoading } = useQuery({
        queryKey: ['get-pets', params],
        queryFn: () => getPets(params)
    });

    return { data, isLoading }
}