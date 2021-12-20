import { Chart } from './containers/chart'
import { List } from './containers/list'
import { ButtonOne } from './containers/mutable/button-one'
import { ButtonTwo } from './containers/mutable/button-two'

const View = () => {
  return (
    <div className="w-full p-40 grid grid-cols-2 gap-7">
      <ButtonOne />
      <ButtonTwo />
      {/* <List />
      <Chart /> */}
    </div>
  )
}

export default View
