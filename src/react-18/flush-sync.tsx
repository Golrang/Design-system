import { useState } from 'react'
import { flushSync } from 'react-dom'

export const Batching = () => {
  const [fetched, setFetched] = useState(0)
  const [data, setdata] = useState<{ id: number; title: string }[] | undefined>(
    undefined
  )
  const handleFetch = () => {
    fetch('')
      .then((res) => res.json())
      .then((res) => {
        setdata(res)
        setFetched((prev) => prev + 1)
        // React 17 and earlier does NOT batch these because they run *after* the event in a callback, not *during* it
        // React 18 and later DOES batch these
        // React will only re-render once at the end (that's batching!)
      })
  }
  const handleFetchWithoutBatch = () => {
    fetch('')
      .then((res) => res.json())
      .then((res) => {
        flushSync(() => setdata(res))
        // React has updated the DOM by now
        flushSync(() => setFetched((prev) => prev + 1))
        // React has updated the DOM by now
      })
  }

  return (
    <div>
      <button onClick={handleFetch}>Fetch</button>
      <button onClick={handleFetchWithoutBatch}>Fetch</button>
      <span>{fetched}</span>
      {data?.map((item: any) => (
        <span>{item.title}</span>
      ))}
    </div>
  )
}
