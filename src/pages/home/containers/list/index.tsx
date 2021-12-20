import { memo } from 'react'
import { useList } from './use-list'

export const List = memo(() => {
  const { data } = useList()

  return (
    <div className="w-full  rounded h-full flex flex-col items-center justify-center space-y-2 ">
      {data?.map((item: any) => (
        <span
          key={item}
          className=" border border-gray-300 rounded p-2 bg-blue-400 text-gray-500"
        >
          {item}
        </span>
      ))}
    </div>
  )
})
