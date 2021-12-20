import { createRoot } from 'react-dom'
import { Boot } from './boot'
import '../styles/index.css'

const root = createRoot(document.getElementById('app'))
root.render(<Boot />)
