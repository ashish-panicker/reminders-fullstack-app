import React, { use } from 'react'
import { Link } from 'react-router'
import AuthContext from '../context/AuthContext'
import NavLink from './NavLink'

const Navbar = () => {
	const { token } = use(AuthContext)
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
			</nav>
		</div>
	)
}

export default Navbar
