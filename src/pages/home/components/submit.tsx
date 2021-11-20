export const Submit = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="bg-indigo-600 rounded w-full h-12 hover:opacity-70 focus:outline-none text-white disabled:bg-gray-400"
    >
      Submit
    </button>
  )
}
