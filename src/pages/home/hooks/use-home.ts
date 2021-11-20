import { useMutation } from 'react-query'
import { useCallback } from 'react'
import { service } from './services'

export const useHome = () => {
  const { mutate } = useMutation(service)

  return {
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
