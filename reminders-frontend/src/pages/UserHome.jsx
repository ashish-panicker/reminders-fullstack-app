import NewReminderForm from '../components/reminder/NewReminderForm'
import ReminderList from '../components/reminder/ReminderList'

const UserHomePage = () => {
	return (
		<div className=' px-6 py-10'>
			<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8'>
				{/* Left: Form */}
				<NewReminderForm />

				{/* Right: List */}
				<ReminderList />
			</div>
		</div>
	)
}

export default UserHomePage
