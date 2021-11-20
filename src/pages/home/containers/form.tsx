import { Form } from 'components/form'
import { Check, City, Details, Submit, User } from '../components'
import { useFormArray, useHome } from '../hooks'

export const HomeForm = () => {
  // const { onSubmit, isLoading } = useHome()
  const { fields, state, onAppend, onChange, onRemove } = useFormArray()

  return (
    <form
      className="grid grid-cols-1 gap-6"
      onSubmit={(e) => e.preventDefault()}
    >
      {fields.map((field: any, index: number) => (
        <div key={field.id} className="grid grid-cols-4 gap-x-2">
          <input
            type="text"
            name={`first${field.id}`}
            onChange={onChange(index)}
            value={state[index]?.[`first${field.id}`]}
          />
          <input
            type="text"
            name={`last${field.id}`}
            onChange={onChange(index)}
            value={state[index]?.[`last${field.id}`]}
          />
          <input
            type="text"
            name={`pass${field.id}`}
            onChange={onChange(index)}
            value={state[index]?.[`pass${field.id}`]}
          />
          <button onClick={onRemove(index)}>delete</button>
        </div>
      ))}
      <button
        type="button"
        className="w-full h-12 rounded bg-green-600"
        onClick={onAppend}
      >
        add
      </button>
      <button
        type="submit"
        className="w-full h-12 rounded bg-blue-600"
        onClick={() => console.log(state)}
      >
        Submit
      </button>
    </form>
  )

  // return (
  //   <Form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
  //     <User />
  //     <City />
  //     <Details />
  //     <Check />
  //     <Submit isLoading={isLoading} />
  //   </Form>
  // )
}
