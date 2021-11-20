import { lazy } from 'utils/lazy'
const View = lazy(() => import('.'))
export const route = {
  path: '/',
  name: 'ROUTE:HOME',
  layout: 'admin',
  authorize: true,
  element: <View />,
}
