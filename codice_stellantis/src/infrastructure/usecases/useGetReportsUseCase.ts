import {useGetReports} from "../hook/useGetReports.ts";


//Questa è l'interfaccia pulita che viene utilizzata dai componenti

export const useGetReportsUseCase = () => {
    const {data, isLoading, error} = useGetReports()

    return{
        reports: data,
        isLoading,
        error
    }
}