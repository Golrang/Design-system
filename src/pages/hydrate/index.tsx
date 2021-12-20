import { lazy, Suspense } from 'react'

const Dashboard = lazy(() =>
  import('./containers/dashboard').then((module) => ({
    default: module.Dashboard,
  }))
)
const View = () => {
  return (
    <div className="w-full p-10 grid grid-cols-5 gap-4">
      <div className="col-span-5 h-20 rounded w-full bg-blue-400" />
      <Suspense
        fallback={
          <div className="col-span-1 bg-red-100 rounded h-screen w-full grid grid-cols-1 gap-y-2 p-4"></div>
        }
      >
        <Dashboard />
      </Suspense>

      <div className="col-span-3 bg-yellow-400 rounded w-full h-screen " />
      <div className="col-span-1 bg-green-400 rounded h-screen w-full" />
    </div>
  )
}

export default View
