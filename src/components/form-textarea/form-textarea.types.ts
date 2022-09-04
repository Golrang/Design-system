import { ComponentProps } from 'react'

export type TFormTextarea<G> = Omit<
  ComponentProps<'textarea'>,
  'size' | 'ref' | 'name'
> & {
  label?: `${Capitalize<G & string>}`
  name: G
}
