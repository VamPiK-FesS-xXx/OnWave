import { Route, Routes } from 'react-router-dom'
import Header from './components/header/headerLayout'
import BrowserMainPageLayout from './components/browser-main-page/browserTrackLayout'
import Player from './components/player/playerLayout'
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='' element={<BrowserMainPageLayout />} />
			</Routes>
			<Player />
		</>
	)
}

export default App
