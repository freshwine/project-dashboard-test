import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Item = {
  county: string
  english: string
  total: number
}

export function TripRanking({ dataUrl }: { dataUrl: string }) {
  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className='h-120 space-y-8 overflow-y-auto pr-2'>
      {data.map((item, index) => (
        <div key={item.county} className='flex items-center gap-4'>
          <Avatar className='h-9 w-9'>
            <AvatarFallback>{index + 1}</AvatarFallback>
          </Avatar>

          <div className='flex flex-1 flex-wrap items-center justify-between'>
            <div className='space-y-1'>
              <p className='text-sm leading-none font-medium'>{item.county}</p>
              <p className='text-sm text-muted-foreground'>{item.english}</p>
            </div>

            <div className='font-medium'>{item.total.toLocaleString()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
