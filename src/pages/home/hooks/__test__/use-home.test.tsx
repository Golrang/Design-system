import { renderHook, act } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'

import { useHome } from '..'
import { service } from '../services'

jest.mock('../services')

const serviceMock = service as any

describe('use home hook logic', () => {
  beforeEach(() => serviceMock.mockResolvedValueOnce({ success: true }))

  it('should return on submit function', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHome(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={new QueryClient()}>
          {children}
        </QueryClientProvider>
      ),
    })

    act(() => result.current.onSubmit({ user: 'farshad', details: 'test' }))
    await waitForNextUpdate()
    expect(serviceMock).toHaveBeenCalledTimes(1)
    expect(serviceMock).toHaveBeenCalledWith({
      title: 'farshad',
      body: 'test',
      id: 1,
      userId: 2,
    })
  })
})
