import { useEffect, useMemo, useState } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'
import Map, { Layer, Source } from 'react-map-gl/maplibre'

type TripData = {
  county: string
  english: string
  total: number
}

function useTripData(url: string) {
  const [data, setData] = useState<TripData[]>([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [url])

  const fillColor = useMemo(() => {
    const expression: any = ['match', ['get', 'name']]

    data.forEach((item) => {
      let color = '#f1f5f9'

      if (item.total >= 700000) color = '#8B0000'
      else if (item.total >= 500000) color = '#D32F2F'
      else if (item.total >= 300000) color = '#FF7043'
      else if (item.total >= 200000) color = '#FFB347'
      else if (item.total >= 100000) color = '#FFE082'
      else if (item.total >= 50000) color = '#FFF3B0'

      expression.push(item.county, color)
    })

    expression.push('#cbd5e1')

    return expression
  }, [data])

  return { data, fillColor }
}

export function TaiwanMap({ dataUrl }: { dataUrl: string }) {
  const { fillColor } = useTripData(dataUrl)

  return (
    <Map
      initialViewState={{
        longitude: 120.9,
        latitude: 23.7,
        zoom: 6.5,
      }}
      style={{
        width: '100%',
        height: 500,
      }}
      mapStyle={{
        version: 8,
        sources: {},
        layers: [
          {
            id: 'background',
            type: 'background',
            paint: {
              'background-color': '#ffffff',
            },
          },
        ],
      }}
      interactiveLayerIds={['taiwan-fill']}
      onClick={(e) => {
        console.log(e.features?.[0]?.properties)
      }}
    >
      <Source
        id='taiwan'
        type='geojson'
        data={`${import.meta.env.BASE_URL}maps/twCounty2010.geo.json`}
      >
        <Layer
          id='taiwan-fill'
          type='fill'
          paint={{
            'fill-color': fillColor,
            'fill-opacity': 0.7,
          }}
        />

        <Layer
          id='taiwan-border'
          type='line'
          paint={{
            'line-color': '#ffffff',
            'line-width': 1,
          }}
        />
      </Source>
      <Source
        id='thr'
        type='geojson'
        data={`${import.meta.env.BASE_URL}maps/twHR.geo.json`}
      >
        <Layer
          id='thr-line-case'
          type='line'
          paint={{
            'line-color': '#007F00',
            'line-width': 1.5,
            'line-opacity': 0.8,
          }}
        />
      </Source>
      <Source
        id='tra'
        type='geojson'
        data={`${import.meta.env.BASE_URL}maps/twRA.geo.json`}
      >
        <Layer
          id='tra-line-case'
          type='line'
          paint={{
            'line-color': '#003B73',
            'line-width': 2,
            'line-opacity': 0.6,
          }}
        />
        <Layer
          id='tra-line-core'
          type='line'
          paint={{
            'line-color': '#FFFFFF',
            'line-width': 1,
            'line-dasharray': ['literal', [3, 3]],
          }}
        />
      </Source>
      <Source
        id='thsr'
        type='geojson'
        data={`${import.meta.env.BASE_URL}maps/twHSR.geo.json`}
      >
        <Layer
          id='thsr-line-case'
          type='line'
          paint={{
            'line-color': '#F26101',
            'line-width': 4,
            'line-opacity': 1,
          }}
        />
        <Layer
          id='thsr-line-core'
          type='line'
          paint={{
            'line-color': '#FFFFFF',
            'line-width': 2,
            'line-dasharray': ['literal', [3, 3]],
          }}
        />
      </Source>
      <div
        style={{
          position: 'absolute',
          right: 10,
          bottom: 50,
          background: 'rgba(255,255,255,0.95)',
          padding: '10px 12px',
          borderRadius: 6,
          boxShadow: '0 2px 6px rgba(0,0,0,.2)',
          fontSize: 13,
          zIndex: 1,
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: 3 }}>圖例</div>

        <LegendItem color='#F26101' label='高鐵' dashed />
        <LegendItem color='#003B73' label='臺鐵' dashed />
        <LegendItem color='#007F00' label='國道' />
      </div>
    </Map>
  )
}

function LegendItem({
  color,
  label,
  dashed = false,
}: {
  color: string
  label: string
  dashed?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
      }}
    >
      <svg width='28' height='10'>
        <line
          x1='0'
          y1='5'
          x2='28'
          y2='5'
          stroke={color}
          strokeWidth={4}
          strokeDasharray={dashed ? '6 4' : undefined}
        />
      </svg>
      <span>{label}</span>
    </div>
  )
}
