import { use, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router'

function Logout() {
	const { logout } = use(AuthContext)
	const navigate = useNavigate()
	useEffect(() => {
		logout()
		navigate('/login', { replace: true })
	}, [])
	return null
}

export default Logout
