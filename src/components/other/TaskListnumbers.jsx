import React from 'react'

const TaskListnumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen '> 
        
    <div className='w-[45%] bg-red-400 px-10 py-9 rounded-xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
      <h3 className='text-xl font-semibold'>Active Tasks</h3>
      </div>

      <div className='w-[45%] bg-blue-400 px-10 py-9 rounded-xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
      <h3 className='text-xl font-semibold'>New Tasks</h3>
      </div>

      <div className='w-[45%] bg-emerald-400 px-10 py-9 rounded-xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
      <h3 className='text-xl font-semibold'>Completed Tasks</h3>
      </div>
      <div className='w-[45%] bg-pink-400 px-10 py-9 rounded-xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
      <h3 className='text-xl font-semibold'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListnumbers
