import { useEffect, useState } from 'react'
import { QueryObserver, useQueryClient } from 'react-query'

export const useChart = () => {
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

  return {
    state,
  }
}

export const useSubscribe = (key: string) => {
  const [state, setstate] = useState<any>(null)

  const client = useQueryClient()

  const observer = new QueryObserver(client, {
    queryKey: key,
    onSuccess: (data) => setstate(data),
  })

  useEffect(() => {
    const unsubscribe = observer.subscribe()
    return () => unsubscribe()
  }, [])

  return {
    state,
  }
}
