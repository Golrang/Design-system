import { FC, Fragment, memo } from 'react'

export const SearchBoxDropBox = memo((props: ISearch) => {
  return (
    <Fragment>
      <div className="absolute left-0 top-[80px] bg-white z-50 w-full rounded border border-blue-300  flex flex-col items-start p-3 h-auto space-y-2 max-h-[300px] overflow-y-auto">
        {(props.data.data.results || []).map((item) => (
          <div
            className=" w-full flex items-center space-x-2 cursor-pointer"
            key={item.id}
            onClick={() => {
              props.onChange(item)
              props.setIsOpen(false)
              props.setParams({ search: '' })
            }}
          >
            <span className="text-gray-600 cursor-pointer">
              {item.first_name} {item.surename}
            </span>
          </div>
        ))}
      </div>
      {props.isOpen && (
        <div
          className="fixed h-full w-full inset-0 z-[40]"
          onClick={() => props.setIsOpen(false)}
        ></div>
      )}
    </Fragment>
  )
})
