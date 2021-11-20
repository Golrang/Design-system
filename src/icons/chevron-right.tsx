import { FC } from 'react'
import { ICWrapper } from './wrapper'

export const ICChevronRight = ({ className, onClick }: IIcon) => {
  return (
    <ICWrapper className={className} onClick={onClick}>
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </ICWrapper>
  )
}
