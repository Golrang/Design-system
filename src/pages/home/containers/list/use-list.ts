import { useQuery } from 'react-query'

export const useList = () => {
  const { data } = useQuery(
    'LIST',
    () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
      ),
    {
      select: (data) => data.map((item: any) => item.title),
      refetchOnWindowFocus: false,
      optimisticResults: true,
    }
  )

  return {
    data,
  }
}
