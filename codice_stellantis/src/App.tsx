import { useState } from 'react';
import { Typography, Row, Col, Empty, Spin, Card } from 'antd';
import { FileTextOutlined, CalendarOutlined } from '@ant-design/icons';

import StatisticsCard from "./presentation/components/Statistics/StatisticsCart.tsx";
import ReportsFilter from "./presentation/components/Reports/ReportsFilter.tsx";
import ReportCard from "./presentation/components/Reports/ReportCard.tsx";
import type {SustainabilityReport} from "./core/types/SustainabilityReport/SustainabilityReport.ts";
import MainLayout from "./presentation/components/Layout/Main/MainLayout.tsx";
import {mockReports} from "./core/data/mockReports.ts";

const { Title, Paragraph } = Typography;

function App() {
    const [reports, setReports] = useState<SustainabilityReport[]>(mockReports); //mock report per mostrare i report
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [selectedYear, setSelectedYear] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');


    /*API call per recuperare i report da un eventuale database
    in questo caso useremo dei mock data salvati in un file ma
    questa puo essere una possibile chiamata API per recuperare la
    lista dei report da un backend*/

    /*
    Report è la lista dei report recuperati dal backend
    loading serve per far comparire uno spinner mentre si recuperano i dati dal backend
    error serve per gestire eventuali errori dati dal backend in caso di non recupero dei dati

    API CALL
    const {reports, loading, error } = useGetReportsUseCase.ts();
     */

    //Calcolo diretto dei report filtrati (valore derivato)
    const filteredReports = reports.filter(report => {
        const matchesYear = selectedYear === 'all' || report.year.toString() === selectedYear;
        const matchesSearch = !searchTerm ||
            report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesYear && matchesSearch;
    });



    //Controllo su loading per mostrare lo spinner in attesa dei dati
    if (loading) {
        return (
            <div className="text-center py-20">
                <Spin size="large" />
            </div>
        );
    }

    //Controllo error per mostrare all'utente un messaggio di errore
    if (error) {
        return <div>Error, impossibile recuperare i report</div>;
    }

    const years = ['all', ...Array.from(new Set(reports.map(r => r.year.toString()))).sort().reverse()];

    const handleDownload = (fileUrl: string, title: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = title;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <Title level={1} className="!mb-4">Sustainability Reports</Title>
                    <Paragraph className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Scarica i report ufficiali pubblicati da Stellantis (ESG disclosures, rapporti CSR e documenti di policy).
                    </Paragraph>
                </div>

                <Row gutter={[24, 24]} className="mb-12">
                    <Col xs={24} sm={8}>
                        <StatisticsCard
                            title="Total Reports"
                            value={reports.length}
                            prefix={<FileTextOutlined className="text-blue-500" />}
                            valueColor="#1e40af"
                        />
                    </Col>
                    <Col xs={24} sm={8}>
                        <StatisticsCard
                            title="Years Covered"
                            value={new Set(reports.map(r => r.year)).size}
                            prefix={<CalendarOutlined className="text-green-500" />}
                            valueColor="#15803d"
                        />
                    </Col>
                    <Col xs={24} sm={8}>
                        <StatisticsCard
                            title="Latest Year"
                            value={156}
                            valueColor="#7c3aed"
                        />
                    </Col>
                </Row>

                <ReportsFilter
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    selectedYear={selectedYear}
                    onYearChange={setSelectedYear}
                    years={years}
                />

                {loading ? (
                    <div className="text-center py-20">
                        <Spin size="large" />
                    </div>
                ) : filteredReports.length === 0 ? (
                    <Card className="shadow-md">
                        <Empty description="No reports found" />
                    </Card>
                ) : (
                    <Row gutter={[24, 24]}>
                        {filteredReports.map((report) => (
                            <Col xs={24} lg={12} key={report.id}>
                                <ReportCard report={report} onDownload={handleDownload} />
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </MainLayout>
    );
}

export default App;