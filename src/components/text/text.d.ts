type TTextOwn<E extends ElementType> = {
  className?: string
  size?: 'header' | 'title'
  children?: ReactNode
  slot?: string
  as?: E
}

type TText<E extends ElementType> = TTextOwn<E> &
  Omit<ComponentProps<E>, keyof TTextOwn<E>>
