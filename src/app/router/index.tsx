import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { NotFound } from './not-found'

export const Router = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
    <Route element={<NotFound />} />
  </Routes>
)
