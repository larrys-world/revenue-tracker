'use client'

import { useState, useEffect } from 'react'
import { RevenueChart } from '@/components/RevenueChart'
import { MetricsCards } from '@/components/MetricsCards'
import { ToolsTable } from '@/components/ToolsTable'
import { mockData } from '@/lib/mockData'

export default function Home() {
  const [data, setData] = useState(mockData)
  const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly'>('daily')

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Revenue Tracker</h1>
          <p className="text-gray-600">Monitor your earnings and track progress toward revenue goals</p>
        </header>

        {/* Time Range Selector */}
        <div className="mb-6">
          <div className="inline-flex rounded-lg shadow-sm" role="group">
            {(['daily', 'weekly', 'monthly'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 text-sm font-medium capitalize ${
                  timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } ${
                  range === 'daily' ? 'rounded-l-lg' : ''
                } ${
                  range === 'monthly' ? 'rounded-r-lg' : ''
                } border border-gray-200`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Cards */}
        <MetricsCards data={data} timeRange={timeRange} />

        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
          <RevenueChart data={data} timeRange={timeRange} />
        </div>

        {/* Tools Performance Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Tool Performance</h2>
          <ToolsTable data={data} />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Revenue data updates daily. Last update: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </main>
  )
}