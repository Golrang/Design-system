import { useState, useEffect } from 'react'

type TUseFetchState<T, E> = {
  data: T | undefined
  error: E | undefined
  loading: boolean
}

export const useFetch = <T extends any[], E = any>(url: string) => {
  const [state, setstate] = useState<TUseFetchState<T, E>>({
    data: undefined,
    error: undefined,
    loading: false,
  })

  const fetchData = () => {
    setstate((prev) => ({ ...prev, loading: true }))
    fetch(url)
      .then((res) => res.json())
      .then((data) => setstate((prev) => ({ ...prev, data, loading: false })))
      .catch((error) =>
        setstate((prev) => ({ ...prev, error, loading: false }))
      )
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchData()
    return () => {
      controller?.abort()
    }
  }, [])

  return { ...state }
}
