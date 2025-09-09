import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/null.css'
import App from './App.jsx'
const main = document.getElementById('root')
createRoot(main).render(
	<StrictMode>
		<App />
	</StrictMode>
)
