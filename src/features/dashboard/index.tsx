import { API } from '@/config/api'
import { TrainFront } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { TaiwanMap } from './components/TaiwanMap'
import { Analytics } from './components/analytics'
import { Overview } from './components/overview'
import { WeekdayDashboard } from './components/overview_weekday'
import { WeekendDashboard } from './components/overview_weekend'
import { TripRanking } from './components/trip-ranking'

export function Dashboard() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <TopNav links={topNav} className='me-auto' />
        {/* <Search /> */}
        <ThemeSwitch />
        {/* <ConfigDrawer /> */}
        {/* <ProfileDropdown /> */}
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
          {/* <div className='flex items-center space-x-2'>
            <Button>Download</Button>
          </div> */}
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview_twmap'
          className='space-y-4'
        >
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview_twmap'>總覽</TabsTrigger>
              <TabsTrigger value='overview_weekday'>平日</TabsTrigger>
              <TabsTrigger value='overview_weekend'>假日</TabsTrigger>
              <TabsTrigger value='analytics'>分析</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='overview_twmap' className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-6'>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>平日旅次</CardTitle>
                  <CardDescription>民國94年各縣市旅次量</CardDescription>
                </CardHeader>
                <CardContent className='ps-2'>
                  <TaiwanMap dataUrl={API.taiwnanMapTripCount94Weekday} />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>假日旅次</CardTitle>
                  <CardDescription>民國94年各縣市旅次量</CardDescription>
                </CardHeader>
                <CardContent className='ps-2'>
                  <TaiwanMap dataUrl={API.taiwnanMapTripCount94Weekend} />
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-6'>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>平日旅次</CardTitle>
                  <CardDescription>民國113年各縣市旅次量</CardDescription>
                </CardHeader>
                <CardContent className='ps-2'>
                  <TaiwanMap dataUrl={API.taiwnanMapTripCount113Weekday} />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>假日旅次</CardTitle>
                  <CardDescription>民國113年各縣市旅次量</CardDescription>
                </CardHeader>
                <CardContent className='ps-2'>
                  <TaiwanMap dataUrl={API.taiwnanMapTripCount113Weekend} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value='overview_weekday' className='space-y-4'>
            <WeekdayDashboard></WeekdayDashboard>
          </TabsContent>
          <TabsContent value='overview_weekend' className='space-y-4'>
            <WeekendDashboard></WeekendDashboard>
          </TabsContent>
          <TabsContent value='analytics' className='space-y-4'>
            <Analytics />
          </TabsContent>
        </Tabs>
      </Main>
    </>
  )
}

const topNav: any[] = [
  // {
  //   title: 'Overview',
  //   href: 'dashboard/overview',
  //   isActive: true,
  //   disabled: false,
  // },
  // {
  //   title: 'Customers',
  //   href: 'dashboard/customers',
  //   isActive: false,
  //   disabled: true,
  // },
  // {
  //   title: 'Products',
  //   href: 'dashboard/products',
  //   isActive: false,
  //   disabled: true,
  // },
  // {
  //   title: 'Settings',
  //   href: 'dashboard/settings',
  //   isActive: false,
  //   disabled: true,
  // },
]
