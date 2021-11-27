import { CardButton } from './card-button'

export const TodoCard = <
  T extends { id: number; title?: string; body?: string }
>({
  item,
}: {
  item: T
}) => {
  return (
    <li
      className={` w-full rounded h-32 py-2 shadow  flex flex-col items-center justify-center space-y-3`}
    >
      <span>{item.title}</span>
      <span className="text-xs text-gray-400">{item.body}</span>
      <CardButton id={item.id} />
    </li>
  )
}
