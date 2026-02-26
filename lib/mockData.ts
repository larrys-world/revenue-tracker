import { RevenueData } from './types'

// Mock data simulating what we'll have once AdSense is active
export const mockData: RevenueData = {
  summary: {
    daily: 8.45,
    weekly: 52.30,
    monthly: 187.25,
  },
  daily: [
    { date: '2026-02-19', revenue: 7.20 },
    { date: '2026-02-20', revenue: 6.85 },
    { date: '2026-02-21', revenue: 8.10 },
    { date: '2026-02-22', revenue: 7.95 },
    { date: '2026-02-23', revenue: 9.20 },
    { date: '2026-02-24', revenue: 8.55 },
    { date: '2026-02-25', revenue: 8.45 },
  ],
  weekly: [
    { date: '2026-02-04', revenue: 48.50 },
    { date: '2026-02-11', revenue: 51.20 },
    { date: '2026-02-18', revenue: 49.75 },
    { date: '2026-02-25', revenue: 52.30 },
  ],
  monthly: [
    { date: '2026-09-01', revenue: 0 },
    { date: '2026-10-01', revenue: 0 },
    { date: '2026-11-01', revenue: 0 },
    { date: '2026-12-01', revenue: 0 },
    { date: '2026-01-01', revenue: 0 },
    { date: '2026-02-01', revenue: 187.25 },
  ],
  tools: [
    { name: 'Tax Calculator', status: 'active', revenue: 42.50, visitors: 8500, rpm: 5.00 },
    { name: 'Investment Calculator', status: 'active', revenue: 38.20, visitors: 7200, rpm: 5.31 },
    { name: 'Mortgage Calculator', status: 'active', revenue: 35.80, visitors: 6800, rpm: 5.26 },
    { name: 'Business Loan Calculator', status: 'active', revenue: 28.40, visitors: 5200, rpm: 5.46 },
    { name: 'Password Generator', status: 'active', revenue: 12.50, visitors: 4100, rpm: 3.05 },
    { name: 'Unit Converter', status: 'active', revenue: 8.20, visitors: 3200, rpm: 2.56 },
    { name: 'Word Counter', status: 'active', revenue: 6.80, visitors: 2800, rpm: 2.43 },
    { name: 'Lorem Ipsum Generator', status: 'active', revenue: 5.40, visitors: 2200, rpm: 2.45 },
    { name: 'Percentage Calculator', status: 'active', revenue: 4.20, visitors: 1800, rpm: 2.33 },
    { name: 'Tip Calculator', status: 'active', revenue: 3.10, visitors: 1400, rpm: 2.21 },
    { name: 'BMI Calculator', status: 'active', revenue: 2.15, visitors: 950, rpm: 2.26 },
    { name: 'QR Code Generator', status: 'pending', revenue: 0, visitors: 0, rpm: 0 },
    { name: 'Age Calculator', status: 'pending', revenue: 0, visitors: 0, rpm: 0 },
    { name: 'Loan Calculator', status: 'inactive', revenue: 0, visitors: 0, rpm: 0 },
    { name: 'Retirement Calculator', status: 'inactive', revenue: 0, visitors: 0, rpm: 0 },
  ]
}