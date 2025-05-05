import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout() {
	return (
		<main className='bg-purple-50 flex flex-col min-h-screen'>
			<Navbar />
			<div className='flex-grow'>
				<Outlet />
			</div>
			<Footer />
		</main>
	)
}

export default Layout
