import { render, screen } from '@testing-library/react'
import { Button } from './Button'
describe('Button', () => {
  it('Dummy', () => {
    render(<Button>Click</Button>)
    screen.getByText(/click/i)
  })
})
