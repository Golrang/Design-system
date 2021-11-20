import { ElementType } from 'react'

export const Text = <E extends ElementType = 'span'>({
  className,
  size,
  children,
  slot,
  as,
}: TText<E>) => {
  const Component = as || 'span'
  return (
    <Component
      slot={slot}
      className={`${
        !className ||
        (!className.includes('text') && 'text-gray-600 dark:text-gray-400')
      } ${
        size === 'header'
          ? 'text-3xl'
          : size === 'title'
          ? 'text-2xl'
          : 'text-base'
      } ${className}`}
    >
      {children}
    </Component>
  )
}
