import { useEffect, useState } from 'react'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

type Item = {
  year: number
  平日: number
  假日: number
}

export function AnalyticsChart() {
  const dataUrl = `${import.meta.env.BASE_URL}data/trip_count_94-113.json`

  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err))
  }, [])

  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart
        data={data}
        margin={{
          left: 15,
          right: 8,
          top: 8,
        }}
      >
        <XAxis
          dataKey='year'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />

        <YAxis
          width={60}
          stroke='#888888'
          fontSize={12}
          tickFormatter={(value) => `${(Number(value) / 10000).toFixed(1)}萬`}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          labelFormatter={(label) => `${label}年`}
          formatter={(value) => `${(Number(value) / 10000).toFixed(2)}萬`}
          contentStyle={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #ddd',
          }}
        />

        <Area
          type='natural'
          dataKey='平日'
          stroke='var(--chart-2'
          strokeWidth={4}
          fill='#D0E0E3'
          fillOpacity={1}
          stackId='a'
        />

        <Area
          type='natural'
          dataKey='假日'
          stroke='var(--chart-1'
          strokeWidth={2}
          fill='#EAD1DC'
          fillOpacity={1}
          stackId='a'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
