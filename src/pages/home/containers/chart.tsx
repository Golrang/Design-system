import { useEffect, useState } from 'react'
import { QueryObserver, useQueryClient } from 'react-query'

export const Chart = () => {
  const client = useQueryClient()
  const observer = new QueryObserver(client, {
    queryKey: 'LIST',
  })
  const [state, setstate] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = observer.subscribe((res) => {
      setstate(res)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="w-full bg-red-400 rounded h-full flex flex-col items-center justify-center p-4">
      {state?.data?.map((item: any) => (
        <span key={item.id} className="text-white">
          {item.name}
        </span>
      ))}
    </div>
  )
}
