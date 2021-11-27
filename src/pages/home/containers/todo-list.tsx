import { Button } from 'components/button'
import { TodoCard } from '../components'
import { useFetch } from '../hooks'

export type TodoListProps = {
  id: number
  userId: number
  body: string
  title: string
}

export const TodoList = () => {
  const { data, error, loading } = useFetch<
    TodoListProps[],
    { message: string }
  >('https://jsonplaceholder.typicode.com/posts')

  if (loading) return <p>Loading...</p>
  if (error) return <div>{error.message}</div>

  return (
    <ul className="grid grid-cols-1 gap-y-3">
      <Button onClick={(e) => console.log(e)}>Refetch</Button>
      {data?.map((item) => (
        <TodoCard item={item} key={item.id} />
      ))}
    </ul>
  )
}
