function Reminderitem({ reminder }) {
	return (
		<li
			className={`p-4 bg-purple-50 border-l-4 rounded shadow  
								${reminder.completed ? 'border-green-500' : 'border-purple-500'}`}>
			<div className='text-md text-purple-800 font-semibold'>
				{reminder.text}
			</div>
			<div className='text-sm text-gray-500'>Remind on: {reminder.date}</div>
		</li>
	)
}

export default Reminderitem
