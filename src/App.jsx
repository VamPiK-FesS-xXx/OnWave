import { Route, Routes } from 'react-router-dom'
import Header from './components/header/headerLayout'
import BrowserMainPageLayout from './components/browser-main-page/browserTrackLayout'
function App() {
	return (
		<>
			{/* <Header /> */}
			<Routes>
				<Route path='' element={<BrowserMainPageLayout />} />
			</Routes>
		</>
	)
}

export default App
