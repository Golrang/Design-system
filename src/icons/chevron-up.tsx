import { FC } from 'react'
import { ICWrapper } from './wrapper'

export const ICChevronUp = ({ className, onClick, role, id }: IIcon) => {
  return (
    <ICWrapper className={className} onClick={onClick} role={role} id={id}>
      <path
        fillRule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      />
    </ICWrapper>
  )
}
