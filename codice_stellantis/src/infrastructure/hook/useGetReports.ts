import {useQuery} from "@tanstack/react-query";
import {getReports} from "../api/Reports/reportsApi.ts";

//Parte di tanstack che gestisce cache e loading

export const useGetReports = () => {
    return useQuery({
        queryFn: async () => getReports(),
        queryKey: ["getReports"],
        staleTime: 1800000
    })
}