import { Typography } from 'antd'
import { ComponentProps } from 'react'

const { Title: AntTitle } = Typography

type TTitleProps = ComponentProps<typeof Typography.Title>

export const Title = ({ children, ...rest }: TTitleProps) => {
  return <AntTitle {...rest}>{children}</AntTitle>
}
