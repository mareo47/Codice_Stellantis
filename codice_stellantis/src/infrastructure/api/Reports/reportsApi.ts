import type {GetReportsResponse} from "./reportsTypes.ts";
import httpApi from "../../../core/clients/httpApi.ts";


//Chiamata specifica per recupeare i dati
export const getReports = async (): Promise<GetReportsResponse> => {
    const {data} = await httpApi.get<GetReportsResponse>('/reports');
    return data
}