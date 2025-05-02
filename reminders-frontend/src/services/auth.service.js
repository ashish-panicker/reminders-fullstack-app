import axios from 'axios'

export const login = async (login) => {
	const url = `${import.meta.env.VITE_API_URL}${
		import.meta.env.VITE_LOGIN_ENDPOINT
	}`
	console.log(`placing get call to ${url}`)
	try {
		const response = await axios.post(url, login)
		return { status: response.status, data: response.data }
	} catch (error) {
		return { status: error.response.status, data: error.response.data }
	}
}
