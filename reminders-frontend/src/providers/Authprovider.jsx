import { useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null)

	useEffect(() => {
		const storedToken = localStorage.getItem('token')
		if (storedToken) {
			setToken(storedToken)
		}
	}, [])

	const login = (jwt) => {
		localStorage.setItem('token', jwt)
		setToken(jwt)
	}

	const logout = () => {
		localStorage.removeItem('token')
		setToken(null)
	}

	const values = { login, logout, token }

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthProvider
