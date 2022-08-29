import { TIcon } from './icons.types'
import { ICWrapper } from './IconWrapper'

export const ICArrowUp = ({ className, onClick }: TIcon) => {
  return (
    <ICWrapper className={className} onClick={onClick}>
      <path
        fillRule="evenodd"
        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
      />
    </ICWrapper>
  )
}
