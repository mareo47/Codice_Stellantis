import { Layout, Typography } from 'antd';
import type { ReactNode } from 'react';
import stellantisLogo from '../../../../assets/Stellantis-logo.jpg';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Layout className="min-h-screen">
            <Header className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg" style={{ padding: '0 50px', height: 'auto', lineHeight: 'normal' }}>
                <div className="py-6">
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src={stellantisLogo}  //
                            alt="Stellantis Logo"
                            className="w-20 h-20 object-contain"

                        />
                        <div>
                            <Title level={2} className="!text-white !mb-0">
                                Stellantis Group
                            </Title>
                            <Text className="text-slate-300 text-sm">One of the world's leading automotive manufacturers</Text>
                        </div>
                    </div>
                </div>
            </Header>

            <Content className="bg-slate-50" style={{ padding: '50px' }}>
                {children}
            </Content>

            <Footer className="bg-slate-800 text-slate-300 text-center">
                <div className="max-w-7xl mx-auto">
                    <Paragraph className="!text-slate-400 mb-2">
                        Stellantis Group - One of the world's leading automotive manufacturers
                    </Paragraph>
                    <Text className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} All rights reserved. These reports are provided for transparency and stakeholder engagement.
                    </Text>
                </div>
            </Footer>
        </Layout>
    );
};

export default MainLayout;