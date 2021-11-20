import { FC, useMemo } from 'react'

export const LoaidngBounce = ({
  size = 'small',
}: {
  size?: 'small' | 'large'
}) => {
  const circleCommonClasses = useMemo(
    () =>
      size === 'large'
        ? 'h-6 w-6 bg-gray-600 rounded-full'
        : 'h-2 w-2 bg-gray-300 rounded-full',
    [size]
  )
  return (
    <div className="flex" data-testid="loading-bounce">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  )
}
