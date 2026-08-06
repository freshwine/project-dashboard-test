const useLocalJson = import.meta.env.PROD

export const API = {
  overview94113Weekday: useLocalJson
    ? 'data/trip_dis_gro_rate_weekday.json'
    : 'http://localhost:5000/api/dashboard/overview/trip_dis_gro_rate/94/113/weekday',

  overview94113Weekend: useLocalJson
    ? 'data/trip_dis_gro_rate_weekend.json'
    : 'http://localhost:5000/api/dashboard/overview/trip_dis_gro_rate/94/113/weekend',

  overviewTripRanking113Weekday: useLocalJson
    ? 'data/trip_count_113_weekday.json'
    : 'http://localhost:5000/api/dashboard/overview/trip_count/113/weekday',

  overviewTripRanking113Weekend: useLocalJson
    ? 'data/trip_count_113_weekend.json'
    : 'http://localhost:5000/api/dashboard/overview/trip_count/113/weekend',

  taiwnanMapTripCount113Weekday: useLocalJson
    ? 'data/trip_count_113_weekday.json'
    : 'http://localhost:5000/api/dashboard/overview/trip_count/113/weekday',

  taiwnanMapTripCount113Weekend: useLocalJson
    ? 'data/trip_count_113_weekend.json'
    : 'http://localhost:5000/api/dashboard/overview/trip_count/113/weekend',

  taiwnanMapTripCount94Weekday: useLocalJson
    ? 'data/trip_count_94_weekday.json'
    : 'http://localhost:5000/api/dashboard/overview/trip_count/94/weekday',

  taiwnanMapTripCount94Weekend: useLocalJson
    ? 'data/trip_count_94_weekend.json'
    : 'http://localhost:5000/api/dashboard/overview/trip_count/94/weekend',

  analyticsChart: useLocalJson
    ? 'data/trip_count_94-113.json'
    : 'http://localhost:5000/api/dashboard/analytics_chart/trip_count/94/113/',
}
