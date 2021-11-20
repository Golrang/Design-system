import { useState, ChangeEvent, useCallback } from 'react'

export const useFormArray = () => {
  const [fields, setFileds] = useState([] as any)
  const [state, setstate] = useState([] as any)

  const onChange = useCallback(
    (index: number) => (e: ChangeEvent<HTMLInputElement>) =>
      setstate((prev: any) => {
        prev[index] = {
          ...prev[index],
          [e.target.name]: e.target.value,
        }
        return [...prev]
      }),
    []
  )

  const onAppend = useCallback(
    () =>
      setFileds((prev: any) => [
        ...prev,
        { id: Math.random(), first: '', last: '', pass: '' },
      ]),
    []
  )

  const onRemove = useCallback(
    (index: number) => () => {
      setFileds((prev: any) =>
        prev.filter((_: any, ind: number) => ind !== index)
      )
      setstate((prev: any) =>
        prev.filter((_: any, ind: number) => ind !== index)
      )
    },
    []
  )

  return {
    state,
    fields,
    onChange,
    onAppend,
    onRemove,
  }
}
