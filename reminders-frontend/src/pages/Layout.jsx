import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout() {
	return (
		<main className='flex flex-col min-h-screen'>
			<Navbar />
			<div className='flex-grow'>
				<Outlet />
			</div>
			<Footer />
		</main>
	)
}

export default Layout
