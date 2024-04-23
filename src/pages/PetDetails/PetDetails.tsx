import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './PetDetails.module.css'
import { getPetById } from "../../services/pets/get.pet.by.id";
import { ImageBase64 } from "../../components/common/ImageBase64/ImageBase64";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../../components/common/Skeleton";
import { useShelter } from "../../hooks/useShelter";
import { Button, ButtonVariant } from "../../components/common/Button";
import whatsapp from '../../assets/whatsapp.svg'

export function PetDetails() {

    const { id } = useParams()

    const { data: shelterData, isError: shelterIsError } = useShelter()

    const { data: petData, isLoading, isError: petIsError } = useQuery({
        queryKey: ['get-pet-by-id', id],
        queryFn: async () => {
            return await getPetById(id ?? '')
        }
    })

    

    return (
        <Grid>
            <div className={styles.container}>
                <Header showReturn={true} />
                <main className={styles.content}>
                    {isLoading && (
                        <div className={styles.skeleton}>
                            <Skeleton circle={true} width={200} height={200} />
                            <Skeleton width={180} height={24} style={{ margin: 16 }} />
                        </div>
                    )}
                    {
                        !isLoading &&
                        <>
                            <ImageBase64 src={petData?.photo} className={styles.picture} />
                            {
                                petIsError &&
                                <>
                                    <h1>Pet não encontrado</h1>
                                    <Link to='/pets'>Voltar para listagem</Link>
                                </>
                            }
                            {
                                !petIsError &&
                                <>
                                    <h1>{petData?.name}</h1>
                                    <span>Sobew o Pet</span>
                                    <p>{petData?.bio}</p>
                                    {
                                        !shelterIsError &&
                                        <a href={`https://wa.me/${shelterData?.shelterWhatsApp}?text=Olá, gostaria de mais informações sobre: ${petData?.name}`} target="_blank">
                                            <Button variant={ButtonVariant.Text}>
                                                <span className={styles.buttonWhatsapp}>
                                                    <img src={whatsapp}/>
                                                    Entre em contato com o abrigo
                                                </span>
                                            </Button>
                                        </a>
                                    }
                                </>
                            }

                        </>
                    }

                </main>
                <h1>Detalhes do Pet</h1>
            </div>
        </Grid>
    )
}
