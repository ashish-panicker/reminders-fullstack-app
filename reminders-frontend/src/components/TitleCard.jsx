import React from 'react'

function TitleCard({ title, desc }) {
	return (
		<div
			className='p-6 bg-white rounded-xl shadow-2xl
            transform transition duration-300 hover:scale-101 hover:shadow-purple-500'>
			<h3 className='text-[22px] font-bold text-purple-700 mb-2'>{title}</h3>
			<p className='text text-gray-600'>{desc}</p>
		</div>
	)
}

export default TitleCard
