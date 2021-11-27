import axios from 'axios'
import { Form } from 'components/form'
import { useFormContext, useWatch } from 'react-hook-form'
import { useQuery } from 'react-query'
import { memo } from 'react'
import {
  Check,
  City,
  Details,
  Password,
  Street,
  Submit,
  User,
} from '../components'
import { useHome } from '../hooks'

const DynamicStreet = memo(() => {
  const { control, setValue } = useFormContext()

  const state = useWatch({ control, name: 'city' })

  const { data, isLoading } = useQuery(
    ['street', state],
    async () =>
      await axios(`https://jsonplaceholder.typicode.com/posts/${state}`),
    {
      enabled: !!state,
      onSuccess: (data) => setValue('user', data?.data?.title),
    }
  )

  if (isLoading) return <div>Loading...</div>
  return <Street data={data} />
})

const TempButton = memo(() => {
  const { control, setError } = useFormContext()

  const state = useWatch({ control, name: 'details' })

  return (
    <button
      type="button"
      onClick={() =>
        !state && setError('detials', { message: 'Is required', type: 'un' })
      }
    >
      Temp
    </button>
  )
})

export const HomeForm = () => {
  const { onSubmit, isLoading } = useHome()

  return (
    <Form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
      <User />
      <Password />
      <City />
      <DynamicStreet />
      <Details />
      <Check />
      <TempButton />
      <Submit isLoading={isLoading} />
    </Form>
  )
}
