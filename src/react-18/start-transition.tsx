import { ChangeEvent, useState, useTransition } from 'react'
import { useQuery } from 'react-query'

const fetcher = () =>
  fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

export const ReactTransition = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState({ snapshot: [], filtered: [] })
  const [isPending, startTransition] = useTransition()

  const { isLoading } = useQuery('LIST', fetcher, {
    onSuccess: (data) => setData({ snapshot: data, filtered: data }),
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // Urgent update: Show what typed
    setSearch(e.target.value)
    // Not urgent update: Show the filtered list
    startTransition(() => {
      setData((prev) => ({
        ...prev,
        filtered: prev.snapshot.filter((item: any) =>
          item.title.includes(e.target.value)
        ),
      }))
    })
  }

  return (
    <div className=" max-w-lg mx-auto m-32 rounded h-full flex flex-col items-center justify-center space-y-2 ">
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={handleSearch}
      />

      {isLoading ? (
        <span>loading...</span>
      ) : (
        data.filtered.map((item: any) => (
          <span
            key={item.id}
            className={`border border-gray-300 rounded p-2 bg-blue-400 text-gray-500 ${
              isPending && 'opacity-50'
            }`}
          >
            {item.title}
          </span>
        ))
      )}
    </div>
  )
}
