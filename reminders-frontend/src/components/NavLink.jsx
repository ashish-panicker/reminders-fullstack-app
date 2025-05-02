import { Link } from 'react-router'

const NavLink = ({ to, linkText }) => {
	return (
		<Link
			to={to}
			className='px-4 py-2 text-white font-semibold hover:text-white 
                    		hover:bg-purple-600 rounded transition duration-300'>
			{linkText}
		</Link>
	)
}

export default NavLink
