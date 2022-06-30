import { createRoot } from 'react-dom'
import { App } from './App'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(<App />)
