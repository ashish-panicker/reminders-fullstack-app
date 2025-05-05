import React, { useState } from 'react'
import Reminderitem from './Reminderitem'

const mockReminders = [
	{ id: 1, text: 'Call the dentist', date: '2025-05-02', completed: false },
	{ id: 2, text: 'Renew gym membership', date: '2025-04-20', completed: true },
	{ id: 3, text: 'Buy groceries', date: '2025-05-01', completed: false },
	{
		id: 4,
		text: 'Schedule team meeting',
		date: '2025-05-03',
		completed: false,
	},
	{ id: 5, text: 'Feed the cat', date: '2025-05-01', completed: true },
	{ id: 6, text: 'Workout', date: '2025-05-01', completed: false },
	{ id: 7, text: 'Plan trip', date: '2025-05-04', completed: false },
]

const ReminderList = () => {
	const [filter, setFilter] = useState('upcoming')

	const filteredReminders = mockReminders.filter((reminder) =>
		filter === 'completed' ? reminder.completed : !reminder.completed
	)

	return (
		<div className='bg-white p-6 rounded-lg shadow-lg w-full'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-xl font-bold text-purple-700'>Your Reminders</h2>
				<div>
					<button
						className={`px-3 py-1 rounded-l-md border ${
							filter === 'upcoming'
								? 'bg-purple-700 text-white'
								: 'bg-purple-100 text-purple-700'
						}`}
						onClick={() => setFilter('upcoming')}>
						Upcoming
					</button>
					<button
						className={`px-3 py-1 rounded-r-md border ${
							filter === 'completed'
								? 'bg-purple-700 text-white'
								: 'bg-purple-100 text-purple-700'
						}`}
						onClick={() => setFilter('completed')}>
						Completed
					</button>
				</div>
			</div>

			<div className='max-h-100 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100 hover:scrollbar-thumb-purple-600'>
				{filteredReminders.length === 0 ? (
					<p className='text-sm text-gray-500'>No reminders to show.</p>
				) : (
					<ul className='space-y-3'>
						{filteredReminders.map((reminder) => (
							<Reminderitem
								reminder={reminder}
								key={reminder.id}
							/>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default ReminderList
