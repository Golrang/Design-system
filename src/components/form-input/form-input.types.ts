import { InputProps } from 'antd'

export type TFormInput<G> = Omit<InputProps, 'size' | 'ref' | 'name'> & {
  label?: string
  name: G
}
