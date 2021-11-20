import { Link } from 'react-router-dom'

export const NotFound = () => (
  <div className="grid place-items-center mt-60 ">
    <h1 className="text-gray-300 text-6xl">404 - Not Found!</h1>
    <Link className="mt-12 text-blue-300" to="/">
      Go Home
    </Link>
  </div>
)
