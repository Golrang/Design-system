import { Select } from 'components/select'

export const City = () => {
  return (
    <Select name="city" label="city" required>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </Select>
  )
}
