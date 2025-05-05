import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const NewReminderForm = () => {
	const formik = useFormik({
		initialValues: {
			reminder: '',
			date: '',
		},
		validationSchema: Yup.object({
			reminder: Yup.string()
				.required('Reminder is required')
				.min(5, 'Reminder must be at least 5 characters'),
			date: Yup.date()
				.required('Date is required')
				.min(new Date(), 'Date cannot be in the past'),
		}),
		onSubmit: (values, { resetForm }) => {
			console.log('Reminder Submitted:', values)
			resetForm()
		},
	})

	return (
		<div className='bg-white p-6 rounded-lg shadow-lg w-full'>
			<h2 className='text-xl font-bold text-purple-700 mb-2'>
				Add a New Reminder
			</h2>
			<p className='text-sm text-purple-600 mb-6'>
				Don't forget stuff—drop it here and we'll nudge you on time!
			</p>

			<form
				onSubmit={formik.handleSubmit}
				className='space-y-5'>
				{/* Reminder Input */}
				<div>
					<label
						htmlFor='reminder'
						className='block font-medium text-purple-700 mb-1'>
						Reminder
					</label>
					<textarea
						id='reminder'
						name='reminder'
						rows={4}
						placeholder='E.g. Submit tax documents...'
						className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 ${
							formik.touched.reminder && formik.errors.reminder
								? 'border-red-500 focus:ring-red-400'
								: 'border-purple-300 focus:ring-purple-500'
						}`}
						value={formik.values.reminder}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.reminder && formik.errors.reminder && (
						<p className='text-sm text-red-500 mt-1'>
							{formik.errors.reminder}
						</p>
					)}
				</div>

				{/* Date Input */}
				<div>
					<label
						htmlFor='date'
						className='block font-medium text-purple-700 mb-1'>
						Date
					</label>
					<input
						id='date'
						name='date'
						type='date'
						className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 ${
							formik.touched.date && formik.errors.date
								? 'border-red-500 focus:ring-red-400'
								: 'border-purple-300 focus:ring-purple-500'
						}`}
						value={formik.values.date}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.date && formik.errors.date && (
						<p className='text-sm text-red-500 mt-1'>{formik.errors.date}</p>
					)}
				</div>

				{/* Submit Button */}
				<button
					type='submit'
					className='w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 transition'>
					Save Reminder
				</button>
			</form>
		</div>
	)
}

export default NewReminderForm
