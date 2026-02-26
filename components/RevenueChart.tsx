'use client'

import { RevenueData } from '@/lib/types'
import { useState, useEffect } from 'react'

interface RevenueChartProps {
  data: RevenueData
  timeRange: 'daily' | 'weekly' | 'monthly'
}

export function RevenueChart({ data, timeRange }: RevenueChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-64 bg-gray-100 animate-pulse rounded" />
  }

  // Simple bar chart implementation
  const chartData = timeRange === 'daily' 
    ? data.daily.slice(-7)
    : timeRange === 'weekly'
    ? data.weekly.slice(-4)
    : data.monthly.slice(-6)

  const maxValue = Math.max(...chartData.map(d => d.revenue))
  const barWidth = 100 / chartData.length

  return (
    <div className="h-64 relative">
      <div className="absolute inset-0 flex items-end justify-between gap-2">
        {chartData.map((item, index) => {
          const height = (item.revenue / maxValue) * 100
          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center"
            >
              <div
                className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                style={{ height: `${height}%` }}
                title={`$${item.revenue.toFixed(2)}`}
              />
              <span className="text-xs text-gray-500 mt-2">
                {new Date(item.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          )
        })}
      </div>
      
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
        <span>${maxValue.toFixed(0)}</span>
        <span>${(maxValue / 2).toFixed(0)}</span>
        <span>$0</span>
      </div>
    </div>
  )
}