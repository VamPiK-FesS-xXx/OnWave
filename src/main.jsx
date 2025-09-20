import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/null.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
const main = document.getElementById('root')
createRoot(main).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)
