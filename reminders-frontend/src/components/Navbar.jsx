import React, { use } from 'react'
import { Link, useNavigate } from 'react-router'
import AuthContext from '../context/AuthContext'
import NavLink from './NavLink'

const Navbar = () => {
	const { token, logout } = use(AuthContext)
	const navigate = useNavigate()
	const [menuOpen, setMenuOpen] = React.useState(false)
	const username = 'Ashish' // replace with dynamic username if available

	return (
		<div className='bg-purple-900  container-lg'>
			<nav className='container mx-auto h-16 flex items-center justify-between px-6 shadow-md'>
				<div className='text-2xl text-white font-bold'>
					<Link to=''>Reminder App</Link>
				</div>
				{!token && (
					<div className='space-x-4'>
						<NavLink
							to='login'
							linkText='Login'
						/>
						<NavLink
							to='register'
							linkText='Register'
						/>
					</div>
				)}
				{token && (
					<div className='space-x-4'>
						<div className='relative'>
							<button
								onClick={() => setMenuOpen(!menuOpen)}
								className='flex items-center gap-2 px-4 py-2 bg-purple-300 rounded-lg hover:bg-purple-200 transition duration-300'>
								<span className='font-semibold'>{username}</span>
								<svg
									className={`w-4 h-4 transition-transform duration-300 ${
										menuOpen ? 'rotate-180' : 'rotate-0'
									}`}
									fill='none'
									stroke='currentColor'
									strokeWidth={2}
									viewBox='0 0 24 24'>
									<path d='M19 9l-7 7-7-7' />
								</svg>
							</button>

							{menuOpen && (
								<div className='absolute right-0 mt-2 w-40 bg-white text-gray-700 rounded-lg shadow-lg z-10'>
									<a
										href='/profile'
										className='block px-4 py-2 hover:bg-purple-100 transition'>
										Profile
									</a>

									<button
										onClick={() => {
											logout()
											navigate('/login', { replace: true })
										}}
										className='w-full text-left px-4 py-2 hover:bg-purple-100 transition'>
										Logout
									</button>
								</div>
							)}
						</div>
					</div>
				)}
			</nav>
		</div>
	)
}

export default Navbar
