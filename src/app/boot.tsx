import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { Skeleton } from 'components/skeleton'
import { Router } from './router'

export const Boot = () => (
  <QueryClientProvider client={new QueryClient()}>
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<Skeleton />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
)
