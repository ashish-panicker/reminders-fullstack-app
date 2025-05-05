import { Link } from 'react-router'

const NavLink = ({
	to,
	linkText,
	classNames = `px-4 py-2 text-white font-semibold hover:text-white 
					hover:bg-purple-600 rounded transition duration-300`,
}) => {
	return (
		<Link
			to={to}
			className={classNames}>
			{linkText}
		</Link>
	)
}

export default NavLink
