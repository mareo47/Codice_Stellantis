import { Card, Statistic } from 'antd';
import type { ReactNode } from 'react';

interface StatisticsCardProps {
    title: string;
    value: number | string;
    prefix?: ReactNode;
    valueColor: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ title, value, prefix, valueColor }) => {
    return (
        <Card className="shadow-md border-slate-200 h-full">
            <Statistic
                title={title}
                value={value}
                prefix={prefix}
                valueStyle={{ color: valueColor }}
            />
        </Card>
    );
};

export default StatisticsCard;
