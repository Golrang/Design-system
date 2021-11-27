import { ComponentProps } from 'react'

type TButton = ComponentProps<'button'>

export const Button = ({ children, ...rest }: TButton): JSX.Element => {
  return (
    <button className="bg-pink-500 rounded p-4 shadow" {...rest}>
      {children}
    </button>
  )
}
