import { useCountProvider } from 'providers/mutable-source'
import { memo } from 'react'

export const ButtonTwo = memo(() => {
  const [{ count }, setState] = useCountProvider()

  return (
    <button
      className="bg-red-400 p-3 rounded"
      onClick={() =>
        setState((prev: any) => ({ ...prev, count: prev.count + 1 }))
      }
    >
      Click {count} times
    </button>
  )
})
