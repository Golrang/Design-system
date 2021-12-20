import { memo } from 'react'
import { useSubscribe } from './use-chart'

export const Chart = memo(() => {
  const { state } = useSubscribe('LIST')

  return (
    <div className="w-full flex flex-col items-center space-y-2">
      {state?.map((item: any) => (
        <span
          className="border border-gray-300 rounded p-2 bg-red-400 text-gray-500 "
          key={item.id}
        >
          {item.title}
        </span>
      ))}
    </div>
  )
})
