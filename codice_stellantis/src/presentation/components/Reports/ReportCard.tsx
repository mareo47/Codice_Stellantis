import { Card, Button, Tag, Divider, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import React from 'react';
import type {SustainabilityReport} from "../../../core/types/SustainabilityReport/SustainabilityReport.ts";

const { Title, Paragraph } = Typography;

//Props che il componente padre passa al componente figlio.
interface ReportCardProps {
    report: SustainabilityReport;
    onDownload: (fileUrl: string, title: string) => void;
}


/*  Card del report, con tutte le informazioni necessarie per la visualizzazione.
    Il componente è un componente dumb senza logica interna, serve solo per la visualizzazione dei dati
    vengono utilizzati i componenti UI di AntD per la costruzione del layout.
*/
const ReportCard: React.FC<ReportCardProps> = ({ report, onDownload }) => {
    return (
        <Card
            className={`shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 h-full`}
            hoverable
        >
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                        <Title level={4} className="!mb-2">
                            {report.title}
                        </Title>
                        <div className="flex gap-2 flex-wrap">
                            <Tag color="blue">{report.year}</Tag>
                        </div>
                    </div>
                </div>

                <Paragraph className="text-slate-600 mb-4 flex-1">
                    {report.description}
                </Paragraph>

                <Divider className="my-3" />

                <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-slate-500">
                        <span>{report.file_format}</span>
                        <span>{report.file_size}</span>
                    </div>
                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        onClick={() => onDownload(report.file_url, report.title)}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        Download
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ReportCard;
