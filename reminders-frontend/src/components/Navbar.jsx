import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
	return (
		<div className='bg-purple-900  container-lg'>
			<nav className='container mx-auto h-16 flex items-center justify-between px-6 shadow-md'>
				<div className='text-2xl text-white font-bold'>
					<Link to=''>Reminder App</Link>
				</div>

				<div className='space-x-4'>
					<Link
						to='login'
						className='px-4 py-2 text-white font-semibold hover:text-white 
                    hover:bg-purple-600 rounded transition duration-300'>
						Login
					</Link>
					<Link
						to='register'
						className='px-4 py-2 text-white font-semibold rounded  hover:text-white 
                    hover:bg-purple-700 transition duration-300'>
						Register
					</Link>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
