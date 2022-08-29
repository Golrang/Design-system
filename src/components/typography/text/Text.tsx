import { Typography } from 'antd'
import { ComponentProps } from 'react'

const { Text: AntText } = Typography

type TTitleProps = ComponentProps<typeof Typography.Text>

export const Text = ({ children, ...rest }: TTitleProps) => {
  return <AntText {...rest}>{children}</AntText>
}
