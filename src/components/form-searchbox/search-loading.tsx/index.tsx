import { LoaidngBounce } from 'components/loading'

export const SearchBoxLoading = () => {
  return (
    <div className="absolute left-0 top-[80px] bg-white z-50 w-full rounded border border-blue-300  flex flex-col items-center p-3 h-auto space-y-2 max-h-[100px] overflow-y-auto">
      <LoaidngBounce />
    </div>
  )
}
