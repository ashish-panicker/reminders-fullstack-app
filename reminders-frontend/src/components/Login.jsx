import React, { use } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router'
import loginImage from '../assets/login.svg'
import AuthContext from '../context/AuthContext'
import { login as loginFromApi } from '../services/auth.service'

const Login = () => {
	const { login } = use(AuthContext)
	const navigate = useNavigate()
	const [errorMessage, setErrorMessage] = React.useState(null)

	const initFormState = {
		username: '',
		password: '',
	}

	const schema = Yup.object({
		username: Yup.string().required('Username is mandatory'),
		password: Yup.string()
			.min(6, 'Password must be min 6 chars long')
			.required('Password is mandatory'),
	})

	const formik = useFormik({
		initialValues: initFormState,
		validationSchema: schema,
		onSubmit: async (form, { setSubmitting }) => {
			try {
				const loginForm = { userName: form.username, password: form.password }
				const response = await loginFromApi(loginForm)
				console.log(response)
				login(response.data.token)
				navigate('/home', { replace: true })
			} catch (error) {
				console.log(error)
				setErrorMessage(error.data.payload)
			} finally {
				setSubmitting(false)
			}
		},
	})

	return (
		<div className='flex justify-center items-center min-h-fit gap-12'>
			{/* Left Image Section */}
			<div className='hidden md:flex items-center justify-center '>
				<img
					src={loginImage}
					alt='Login Illustration'
					className='w-auto h-auto pt-8'
				/>
			</div>

			<div className='w-full h-full max-w-md '>
				{/* Title & One-liner */}
				<div className='mb-6 text-center bg-white px-8 py-4 rounded-2xl shadow-2xl'>
					<h2 className='text-3xl font-bold text-purple-800 mb-2'>
						Install Your Brain Backup
					</h2>
					<p className='text-sm text-purple-600'>
						Login to access your reminders—because forgetting is so last year
					</p>
				</div>

				{/* Show a logging in message when user clicks log in */}
				{formik.isSubmitting && (
					<div
						className={`text-center text-2xl fton-semibold p-8 my-6 w-full max-w-md bg-white 
							rounded-2xl shadow-2xl `}>
						{' Logging you in, please wait '}
					</div>
				)}
				{/* Right Form Section */}
				<form
					className={`p-8 w-full max-w-md bg-white rounded-2xl shadow-2xl `}
					onSubmit={formik.handleSubmit}>
					<h2 className='text-2xl font-bold mb-6 text-center text-purple-600'>
						Login
					</h2>
					<div className='mb-4'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>
							Email
						</label>
						<input
							id='username'
							name='username'
							type='text'
							className={`w-full mb-0 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
							focus:ring-2 
							${
								formik.touched.username && formik.errors.username
									? `border-red-500 focus:ring-red-300`
									: `border-purple-300 focus:ring-purple-500`
							}`}
							value={formik.values.username}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.username && formik.errors.username ? (
							<div className='text-sm font-semibold text-red-400 py-1 mb-1'>
								{formik.errors.username}
							</div>
						) : null}
					</div>

					<div className='mb-4'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>
							Password
						</label>
						<input
							id='password'
							name='password'
							type='password'
							className={`w-full mb-0 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
							focus:ring-2 
							${
								formik.touched.password && formik.errors.password
									? `border-red-500 focus:ring-red-300`
									: `border-purple-300 focus:ring-purple-500`
							}`}
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.password && formik.errors.password ? (
							<div className='text-sm font-semibold text-red-400 py-1 mb-1'>
								{formik.errors.password}
							</div>
						) : null}
					</div>
					<button
						disabled={formik.isSubmitting}
						type='submit'
						className={`disabled:bg-purple-500 disabled:cursor-not-allowed bg-purple-600 w-full text-white py-2 rounded hover:bg-purple-800`}>
						{formik.isSubmitting ? 'Logging in...' : 'Login'}
					</button>
					{errorMessage && (
						<div className='text-red-700 bg-red-100 px-2 py-2 mt-5 rounded-lg mb-4 transition-all duration-300 ease-in-out opacity-100'>
							<p>{errorMessage}</p>
						</div>
					)}
				</form>
			</div>
		</div>
	)
}

export default Login
