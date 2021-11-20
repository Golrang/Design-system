import { FC, memo } from 'react'

export const ICWrapper = memo(
  ({ children, onClick, className, role, id }: IIcon) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={className}
        viewBox="0 0 16 16"
        onClick={onClick}
        role={role}
        id={id}
      >
        {children}
      </svg>
    )
  }
)
