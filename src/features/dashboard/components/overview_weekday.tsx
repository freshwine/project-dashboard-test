import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Overview } from './overview'
import { TripRanking } from './trip-ranking'

export function WeekdayDashboard() {
  return (
    <div className='space-y-4'>
      <div className='grid gap-4 sm:grid-cols-1 lg:grid-cols-5'>
        <Card className='rounded-xl border bg-gradient-to-b from-white to-[#f1a87c]/20 shadow-sm'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>高鐵</CardTitle>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-4 w-4 text-muted-foreground'
            >
              <path d='M8 3.1V7a4 4 0 0 0 8 0V3.1' />
              <path d='m9 15-1-1' />
              <path d='m15 15 1-1' />
              <path d='M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z' />
              <path d='m8 19-2 3' />
              <path d='m16 19 2 3' />
            </svg>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+152,528</div>
            <p className='text-xs text-muted-foreground'>+418.19% since 2007</p>
          </CardContent>
        </Card>
        <Card className='rounded-xl border bg-gradient-to-b from-white to-[#82a1d3]/20 shadow-sm'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>臺鐵</CardTitle>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-4 w-4 text-muted-foreground'
            >
              <rect width='16' height='16' x='4' y='3' rx='2' />
              <path d='M4 11h16' />
              <path d='M12 3v8' />
              <path d='m8 19-2 3' />
              <path d='m18 22-2-3' />
              <path d='M8 15h.01' />
              <path d='M16 15h.01' />
            </svg>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+59,464</div>
            <p className='text-xs text-muted-foreground'>+26.84% since 2005</p>
          </CardContent>
        </Card>
        <Card className='rounded-xl border bg-gradient-to-b from-white to-[#9fca86]/20 shadow-sm'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>國道客運</CardTitle>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-4 w-4 text-muted-foreground'
            >
              <path d='M8 6v6' />
              <path d='M15 6v6' />
              <path d='M2 12h19.6' />
              <path d='M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3' />
              <circle cx='7' cy='18' r='2' />
              <path d='M9 18h5' />
              <circle cx='16' cy='18' r='2' />
            </svg>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>-8,754</div>
            <p className='text-xs text-muted-foreground'>-6.56% since 2005</p>
          </CardContent>
        </Card>
        <Card className='rounded-xl border bg-gradient-to-b from-white to-[#999b9b]/20 shadow-sm'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>航空</CardTitle>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-4 w-4 text-muted-foreground'
            >
              <path d='M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z' />
            </svg>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>-22,935</div>
            <p className='text-xs text-muted-foreground'>-100% since 2005</p>
          </CardContent>
        </Card>
        <Card className='rounded-xl border bg-gradient-to-b from-white to-[#fed466]/20 shadow-sm'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>小客車</CardTitle>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-4 w-4 text-muted-foreground'
            >
              <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2' />
              <circle cx='7' cy='17' r='2' />
              <path d='M9 17h6' />
              <circle cx='17' cy='17' r='2' />
            </svg>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+158,004</div>
            <p className='text-xs text-muted-foreground'>+6.25% since 2005</p>
          </CardContent>
        </Card>
      </div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
        <Card className='col-span-1 lg:col-span-4'>
          <CardHeader>
            <CardTitle>距離市占率</CardTitle>
            <CardDescription>民國94與113年各縣市市占率變化</CardDescription>
          </CardHeader>
          <CardContent className='ps-2'>
            {/* <Overview dataUrl='http://localhost:5000/api/dashboard/overview/trip_dis_gro_rate/94/113/weekday' /> */}
            <Overview dataUrl='data/trip_dis_gro_rate_weekday.json' />
          </CardContent>
        </Card>
        <Card className='col-span-1 lg:col-span-3'>
          <CardHeader>
            <CardTitle>縣市旅次</CardTitle>
            <CardDescription>民國113年各縣市旅次量排名</CardDescription>
          </CardHeader>
          <CardContent>
            {/* <TripRanking dataUrl='http://localhost:5000/api/dashboard/overview/trip_count/113/weekday' /> */}
            <TripRanking dataUrl='data/trip_count_113_weekday.json' />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
