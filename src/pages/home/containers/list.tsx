import { useQuery } from 'react-query'

export const List = () => {
  const { data } = useQuery(
    'LIST',
    () =>
      fetch('https://api.github.com/users/octocat/repos').then((res) =>
        res.json()
      ),
    {
      select: (data) => data.map((item: any) => item.name),
    }
  )

  return (
    <div className="w-full bg-indigo-400 rounded h-full flex flex-col items-center justify-center p-4">
      {data?.map((item: any) => (
        <span key={item} className="text-white">
          {item}
        </span>
      ))}
    </div>
  )
}
