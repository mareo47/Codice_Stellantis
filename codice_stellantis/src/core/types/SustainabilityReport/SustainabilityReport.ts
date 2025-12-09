//Type del report, necessario per eseguire tutte le operazioni CRUD.
export interface SustainabilityReport {
    id: string;
    title: string;
    year: number;
    description: string;
    report_type: string;
    file_url: string;
    file_size: string;
    file_format: string;
    published_at: string;
}
