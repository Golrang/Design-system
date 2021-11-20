export const SearchBoxNoItems = () => {
  return (
    <div className="absolute left-0 top-[80px] bg-white z-50 w-full rounded border border-blue-300  flex flex-col items-center p-3 h-auto space-y-2 min-h-[100px] overflow-y-auto">
      <span className="text-gray-600">No items</span>
    </div>
  )
}
