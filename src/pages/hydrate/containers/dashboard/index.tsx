import { useQuery } from 'react-query'

export const Dashboard = () => {
  const { data, isLoading } = useQuery('TODOS', () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
      res.json()
    )
  )

  return (
    <div
      className={`col-span-1 rounded h-screen w-full grid grid-cols-1 gap-y-2 p-4 ${
        isLoading ? 'bg-blue-300' : 'bg-red-400'
      }`}
    >
      {data?.map((item: any) => (
        <div
          key={item.id}
          className="w-full border border-gray-300 rounded h-10 bg-blue-100 test-gray-600 flex items-center justify-center overflow-hidden text-xs"
        >
          {item.title}
        </div>
      ))}
    </div>
  )
}
