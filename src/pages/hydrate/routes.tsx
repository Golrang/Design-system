import { lazy } from 'utils/lazy'

const View = lazy(() => import('.'))
export const route = { path: '/hydrate', element: <View /> }
