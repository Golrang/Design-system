import { useEffect, useState } from 'react'
import { QueryObserver, useQueryClient } from 'react-query'

export const Chart = () => {
  const [state, setstate] = useState<any>(null)

  const client = useQueryClient()

  const observer = new QueryObserver(client, {
    queryKey: 'LIST',
    onSuccess: (data) => setstate(data),
  })

  useEffect(() => {
    const unsubscribe = observer.subscribe()
    return () => unsubscribe()
  }, [])

  return (
    <div className="w-full bg-red-400 rounded h-full flex flex-col items-center justify-center p-4">
      {state?.map((item: any) => (
        <span key={item.id} className="text-white">
          {item.name}
        </span>
      ))}
    </div>
  )
}
