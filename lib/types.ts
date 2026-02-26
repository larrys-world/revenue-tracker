export interface Tool {
  name: string
  status: 'active' | 'pending' | 'inactive'
  revenue: number
  visitors: number
  rpm: number // Revenue per thousand impressions
}

export interface DailyRevenue {
  date: string
  revenue: number
}

export interface RevenueData {
  summary: {
    daily: number
    weekly: number
    monthly: number
  }
  daily: DailyRevenue[]
  weekly: DailyRevenue[]
  monthly: DailyRevenue[]
  tools: Tool[]
}