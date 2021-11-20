import { memo, ReactNode } from 'react'

export const Tooltip = memo(
  ({ children, content }: { children?: ReactNode; content?: string }) => {
    return (
      <div>
        {children}
        <span className="bg-gray-700/60 text-xs text-gray-200 px-1 rounded  shadow-xl z-50 absolute mt-1 hidden peer-hover:block animate-fade-in ">
          {content}
        </span>
      </div>
    )
  }
)
