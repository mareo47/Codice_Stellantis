import { Card, Row, Col, Input, Select, Typography } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react';

const { Text } = Typography;


//Props che il componente padre passa al componente figlio.
interface ReportsFilterProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedYear: string;
    onYearChange: (value: string) => void;
    years: string[];
}


/*  Componente per filtrare i report.
*   la ricerca puo essere effettuata tramite input o selezionando l'anno
* */
const ReportsFilter: React.FC<ReportsFilterProps> = ({searchTerm, onSearchChange, selectedYear, onYearChange, years,}) => {
    return (
        <Card className="mb-8 shadow-md border-slate-200">
            <div className="flex items-center gap-2 mb-4">
                <FilterOutlined className="text-slate-600" />
                <Text strong>Filter Reports</Text>
            </div>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={8}>
                    <Input
                        placeholder="Search reports..."
                        prefix={<SearchOutlined />}
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        allowClear
                    />
                </Col>
                <Col xs={24} sm={8}>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Select Year"
                        value={selectedYear}
                        onChange={onYearChange}
                    >
                        {years.map(year => (
                            <Select.Option key={year} value={year}>
                                {year === 'all' ? 'All Years' : year}
                            </Select.Option>
                        ))}
                    </Select>
                </Col>
            </Row>
        </Card>
    );
};

export default ReportsFilter;
