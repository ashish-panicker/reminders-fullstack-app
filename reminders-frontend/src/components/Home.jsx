import home from '../assets/reminder.svg'
import TitleCard from './TitleCard'

const Home = () => {
	return (
		<div className='container mx-auto min-h-fit'>
			{/* Hero Section */}
			<div
				className='flex flex-col md:flex-row items-center justify-between gap-16  py-10 
				'>
				{/* Left Content */}
				<div className='md:w-1/2 text-center md:text-left'>
					<h1 className='text-4xl md:text-5xl font-bold text-purple-800 mb-4'>
						Never Miss What Matters
					</h1>
					<p className='text-lg text-purple-700 mb-6'>
						Set reminders effortlessly and get notified right on time — whether
						it's a birthday, task, or appointment. Let us remember it for you.
					</p>
					<a
						href='/register'
						className='inline-block bg-purple-700 text-white px-6 py-3 rounded-lg text-lg 
							hover:bg-purple-800 transition'>
						Get Started
					</a>
				</div>

				{/* Right Image */}
				<div className='md:w-1/2 mt-10 md:mt-0 flex justify-end'>
					<img
						src={home}
						alt='Reminder App Illustration'
						className='w-full max-w-md'
					/>
				</div>
			</div>

			{/* Optional Features Section */}
			<div className='py-10'>
				<h2 className='text-[26px] font-semibold text-purple-800 mb-6 text-center'>
					Why Use Our Reminder App?
				</h2>
				<div className='grid md:grid-cols-3 gap-6 text-center'>
					<TitleCard
						title='Simple Setup'
						desc='Add reminders in seconds with just a date and message.'
					/>
					<TitleCard
						title='On-time Alerts'
						desc='Get timely notifications so you never forget important things.'
					/>
					<TitleCard
						title='Stay Organized'
						desc='Manage your daily tasks, events, and notes all in one place.'
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
