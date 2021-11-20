import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { UiProvider } from 'provider/ui-provider'

export const history = createMemoryHistory()

export const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    <UiProvider>
      <Router history={history}>{children}</Router>
    </UiProvider>
  </QueryClientProvider>
)
