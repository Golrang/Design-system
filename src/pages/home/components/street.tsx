import { Select } from 'components/select'
import { memo } from 'react'

const options = [
  { id: 's1', title: 'S1' },
  { id: 's2', title: 'S2' },
  { id: 's3', title: 'S3' },
  { id: 's4', title: 'S4' },
  { id: 's5', title: 'S5' },
  { id: 's6', title: 'S6' },
  { id: 's7', title: 'S7' },
  { id: 's8', title: 'S8' },
  { id: 's9', title: 'S9' },
]

export const Street = memo(({ data }: { data: any }) => {
  return (
    <Select name="street" label="Street" required>
      {options.slice(data?.data?.id, data?.data?.id * 3).map((option) => (
        <option key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </Select>
  )
})
