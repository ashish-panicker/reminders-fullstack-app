import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-purple-800 text-white py-6 mt-auto'>
			<div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
				{/* Brand Info */}
				<div className='mb-4 md:mb-0 text-center md:text-left'>
					<h2 className='text-xl font-semibold'>🕒 RemindMe App</h2>
					<p className='text-sm text-purple-200'>
						Because remembering everything is overrated.
					</p>
				</div>

				{/* Footer Links */}
				<div className='flex space-x-6'>
					<a
						href='/about'
						className='hover:text-purple-300 text-sm'>
						About
					</a>
					<a
						href='/privacy'
						className='hover:text-purple-300 text-sm'>
						Privacy
					</a>
					<a
						href='/terms'
						className='hover:text-purple-300 text-sm'>
						Terms
					</a>
					<a
						href='/contact'
						className='hover:text-purple-300 text-sm'>
						Contact
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
