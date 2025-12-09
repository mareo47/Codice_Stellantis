import type {SustainabilityReport} from "../types/SustainabilityReport/SustainabilityReport.ts";

/*File contenente i mock data per mostrare i reports
ho creato un array di SustainabilityReport da usare nei componenti*/

export const mockReports: SustainabilityReport[] = [
    {
        id: "1",
        title: "Annual Sustainability Report 2024",
        year: 2024,
        description: "Comprehensive overview of our environmental initiatives, carbon reduction strategies, and sustainable manufacturing practices implemented throughout 2024.",
        report_type: "Annual Report",
        file_url: "/reports/sustainability-2024.pdf",
        file_size: "2.4 MB",
        file_format: "PDF",
        published_at: "2024-03-15"
    },
    {
        id: "2",
        title: "Environmental Impact Assessment 2024",
        year: 2024,
        description: "Detailed analysis of our environmental footprint, including greenhouse gas emissions, water consumption, and waste management performance.",
        report_type: "Impact Assessment",
        file_url: "/reports/environmental-impact-2024.pdf",
        file_size: "1.8 MB",
        file_format: "PDF",
        published_at: "2024-06-20"
    },
    {
        id: "3",
        title: "Social Responsibility Report 2023",
        year: 2023,
        description: "Overview of our community engagement programs, employee wellness initiatives, and diversity & inclusion efforts.",
        report_type: "Social Report",
        file_url: "/reports/social-responsibility-2023.pdf",
        file_size: "1.5 MB",
        file_format: "PDF",
        published_at: "2023-12-10"
    },
    {
        id: "4",
        title: "Annual Sustainability Report 2023",
        year: 2023,
        description: "Year-end sustainability metrics showcasing our progress toward carbon neutrality and circular economy goals.",
        report_type: "Annual Report",
        file_url: "/reports/sustainability-2023.pdf",
        file_size: "2.1 MB",
        file_format: "PDF",
        published_at: "2023-03-15"
    },
    {
        id: "5",
        title: "Renewable Energy Transition 2023",
        year: 2023,
        description: "Strategic roadmap and progress report on our transition to 100% renewable energy sources across all manufacturing facilities.",
        report_type: "Special Report",
        file_url: "/reports/renewable-energy-2023.pdf",
        file_size: "3.2 MB",
        file_format: "PDF",
        published_at: "2023-09-05"
    },
    {
        id: "6",
        title: "Supply Chain Sustainability 2022",
        year: 2022,
        description: "Analysis of our supplier environmental standards, ethical sourcing practices, and supply chain optimization efforts.",
        report_type: "Supply Chain Report",
        file_url: "/reports/supply-chain-2022.pdf",
        file_size: "1.9 MB",
        file_format: "PDF",
        published_at: "2022-11-30"
    },
    {
        id: "7",
        title: "Annual Sustainability Report 2022",
        year: 2022,
        description: "Comprehensive sustainability performance review including ESG metrics, stakeholder engagement, and future commitments.",
        report_type: "Annual Report",
        file_url: "/reports/sustainability-2022.pdf",
        file_size: "2.3 MB",
        file_format: "PDF",
        published_at: "2022-03-15"
    },
    {
        id: "8",
        title: "Water Conservation Initiative 2022",
        year: 2022,
        description: "Results from our water recycling programs and watershed protection efforts across global operations.",
        report_type: "Special Report",
        file_url: "/reports/water-conservation-2022.pdf",
        file_size: "1.4 MB",
        file_format: "PDF",
        published_at: "2022-07-22"
    },
    {
        id: "9",
        title: "Annual Sustainability Report 2021",
        year: 2021,
        description: "Sustainability achievements and challenges faced during the pandemic, including remote work environmental impacts.",
        report_type: "Annual Report",
        file_url: "/reports/sustainability-2021.pdf",
        file_size: "2.0 MB",
        file_format: "PDF",
        published_at: "2021-03-15"
    },
    {
        id: "10",
        title: "Circular Economy Strategy 2021",
        year: 2021,
        description: "Framework for implementing circular economy principles in product design, manufacturing, and end-of-life management.",
        report_type: "Strategy Report",
        file_url: "/reports/circular-economy-2021.pdf",
        file_size: "2.8 MB",
        file_format: "PDF",
        published_at: "2021-10-18"
    }
];