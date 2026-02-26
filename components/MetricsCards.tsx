import { RevenueData } from '@/lib/types'

interface MetricsCardsProps {
  data: RevenueData
  timeRange: 'daily' | 'weekly' | 'monthly'
}

export function MetricsCards({ data, timeRange }: MetricsCardsProps) {
  const currentRevenue = data.summary[timeRange]
  const goal = 200 // $200/month goal
  const burnRate = 6.67 // $200/30 days
  const netRevenue = currentRevenue - (timeRange === 'daily' ? burnRate : timeRange === 'weekly' ? burnRate * 7 : burnRate * 30)
  const progressPercent = (data.summary.monthly / goal) * 100

  const cards = [
    {
      title: `${timeRange.charAt(0).toUpperCase() + timeRange.slice(1)} Revenue`,
      value: `$${currentRevenue.toFixed(2)}`,
      change: '+12.5%',
      positive: true,
    },
    {
      title: 'Monthly Goal Progress',
      value: `${progressPercent.toFixed(1)}%`,
      subtitle: `$${data.summary.monthly.toFixed(2)} / $${goal}`,
      positive: progressPercent > 0,
    },
    {
      title: 'Net Revenue',
      value: `$${netRevenue.toFixed(2)}`,
      subtitle: 'After costs',
      positive: netRevenue > 0,
    },
    {
      title: 'Active Tools',
      value: data.tools.filter(t => t.status === 'active').length.toString(),
      subtitle: `${data.tools.length} total`,
      positive: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">{card.title}</h3>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            {card.change && (
              <span className={`text-sm font-medium ${card.positive ? 'text-green-600' : 'text-red-600'}`}>
                {card.change}
              </span>
            )}
          </div>
          {card.subtitle && (
            <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
          )}
        </div>
      ))}
    </div>
  )
}