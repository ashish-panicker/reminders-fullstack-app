import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { RouterProvider } from 'react-router'
import { router } from './routes'

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
