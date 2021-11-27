import { TodoListProps } from '../containers'

type TCardButton = Pick<TodoListProps, 'id'>

export const CardButton = ({ id }: TCardButton) => {
  return (
    <button className="p-2 text-sm text-white bg-indigo-400">Delete</button>
  )
}
