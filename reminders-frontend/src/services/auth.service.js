import axios from 'axios'

export const register = async (registerForm) => {
	const url = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_REGISTER_ENDPOINT}`
	try {
		const response = await axios.post(url, registerForm)
		console.log(response)
	} catch (error) {
		console.error(error)
		throw {
			status: error.response.status,
			data: error.response.data,
		}
	}
}

export const login = async (loginForm) => {
	const url = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_LOGIN_ENDPOINT
		}`
	await sleep(5000)
	try {
		const response = await axios.post(url, loginForm)
		console.log(response)
		// if (!response.ok) {
		// 	const errorText = await response.text()
		// 	throw new Error(errorText || 'An unknown error occurred')
		// }
		return { status: response.status, data: response.data }
	} catch (error) {
		throw {
			status: error.response.status,
			data: error.response.data,
		}
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
