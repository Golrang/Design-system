import { Form } from 'components/form'
import { Check, City, Details, Submit, User } from '../components'
import { useHome } from '../hooks'

export const HomeForm = () => {
  const { onSubmit } = useHome()

  return (
    <Form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
      <User />
      <City />
      <Details />
      <Check />
      <Submit />
    </Form>
  )
}
