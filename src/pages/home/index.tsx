import { Chart } from './containers/chart'
import { List } from './containers/list'

const View = () => {
  return (
    <div className="w-full p-40 grid grid-cols-2 gap-7">
      <List />
      <Chart />
    </div>
  )
}

export default View
