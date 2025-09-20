import { Route, Routes } from 'react-router-dom'
import Header from './components/header/headerLayout'
function App() {

	return (
		<>
			<Routes>
				<Route path='' element={<Header  />} />
			</Routes>
		</>
	)
}

export default App
