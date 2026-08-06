import { useEffect, useState } from 'react'
import {
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

type Item = {
  county: string
  english: string
  total: number
}

export function Overview({ dataUrl }: { dataUrl: string }) {
  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err))
  }, [])

  return (
    <ResponsiveContainer width='100%' height={500}>
      <RadarChart data={data}>
        <PolarGrid strokeWidth={1.5} />

        <PolarAngleAxis
          dataKey='county'
          tick={{ fill: '#888888', fontSize: 16, fontWeight: 500 }}
        />

        <PolarRadiusAxis
          angle={90}
          domain={[-0.1, 0.1]}
          tick={false}
          ticks={[-0.1, 0, 0.1]}
          tickFormatter={(value) => (value === 0 ? '' : `${value * 100}%`)}
        />

        <Tooltip
          formatter={(value) => {
            const num = Number(value) * 100
            return `${num > 0 ? '+' : ''}${num.toFixed(2)}%`
          }}
          contentStyle={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #ddd',
          }}
        />

        <Radar
          dataKey='中短程'
          stroke='#84C1FF'
          fill='#84C1FF'
          strokeWidth={5}
          fillOpacity={0.1}
        />

        <Radar
          dataKey='長程'
          stroke='#1E3A8A'
          fill='#1E3A8A'
          strokeWidth={5}
          fillOpacity={0.1}
        />

        <Radar
          dataKey='中長程'
          stroke='#3B82F6'
          fill='#3B82F6'
          strokeWidth={5}
          fillOpacity={0.1}
        />

        <Legend
          layout='vertical'
          verticalAlign='top'
          align='right'
          formatter={(value) => (
            <span style={{ color: '#888888' }}>{value}</span>
          )}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
