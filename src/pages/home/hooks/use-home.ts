import { useMutation } from 'react-query'
import { useCallback } from 'react'
import { service } from './services'

export const useHome = () => {
  const { mutate, isLoading } = useMutation(service)

  return {
    isLoading,
    onSubmit: useCallback((state: { details: string; user: string }) => {
      const payload = {
        id: 1,
        userId: 2,
        body: state.details,
        title: state.user,
      }
      mutate(payload)
    }, []),
  }
}
