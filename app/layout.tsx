import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revenue Tracker - Monitor Your Earnings',
  description: 'Track daily, weekly, and monthly revenue from your online tools and services. Monitor progress toward revenue goals.',
  keywords: 'revenue tracker, earnings dashboard, income monitor, revenue analytics, business metrics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}