import { useFormik } from 'formik'
import * as Yup from 'yup'
import signup from '../assets/login.svg'

const Register = () => {
	const initFormState = {
		username: '',
		password: '',
		email: '',
	}

	const schema = Yup.object({
		username: Yup.string().required('Username is mandatory'),
		password: Yup.string()
			.min(6, 'Password must be min 6 chars long')
			.required('Password is mandatory'),
		email: Yup.string()
			.email('Provide a valid email')
			.required('Email is mandatory'),
	})

	const formik = useFormik({
		initialValues: initFormState,
		validationSchema: schema,
		onSubmit: (formValue) => console.log(formValue),
	})

	return (
		<div className='flex justify-center items-center min-h-fit gap-12'>
			{/* Left Image Section */}
			<div className='hidden md:flex items-center justify-center '>
				<img
					src={signup}
					alt='Login Illustration'
					className='w-auto h-auto pt-8'
				/>
			</div>

			{/* Right Form Section */}
			<div className='w-full h-full max-w-md '>
				{/* Title & One-liner */}
				<div className='mb-6 text-center bg-white px-8 py-4 rounded-2xl shadow-lg'>
					<h2 className='text-3xl font-bold text-purple-800 mb-2'>
						Memory? Optional
					</h2>
					<p className='text-sm text-purple-600'>
						Create an account and let us do the remembering for you
					</p>
				</div>
				<form
					className=' p-8  w-full max-w-md bg-white rounded-2xl shadow-lg'
					onSubmit={formik.handleSubmit}>
					<h2 className='text-2xl font-bold mb-6 text-center text-purple-600'>
						Register
					</h2>

					<div className='mb-4'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>
							Name
						</label>
						<input
							type='text'
							name='username'
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
							Email
						</label>
						<input
							type='email'
							name='email'
							className={`w-full mb-0 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
						focus:ring-2 
						${
							formik.touched.email && formik.errors.email
								? `border-red-500 focus:ring-red-300`
								: `border-purple-300 focus:ring-purple-500`
						}`}
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className='text-sm font-semibold text-red-400 py-1 mb-1'>
								{formik.errors.email}
							</div>
						) : null}
					</div>

					<div className='mb-4'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>
							Password
						</label>
						<input
							type='password'
							name='password'
							className={`w-full mb- px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
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
						type='submit'
						className='w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-600 transition'>
						Register
					</button>
				</form>
			</div>
		</div>
	)
}

export default Register
