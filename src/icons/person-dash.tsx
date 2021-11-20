import { FC, memo } from 'react'
import { ICWrapper } from './wrapper'

export const ICPersonDash = memo(({ className, onClick }: IIcon) => {
  return (
    <ICWrapper className={className} onClick={onClick}>
      <path
        fillRule="evenodd"
        d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
      />
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </ICWrapper>
  )
})
