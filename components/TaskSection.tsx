import React from 'react'

const TaskSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-6">
        <div className="w-4/5">
            <h1 className="text-green-500 font-bold">List Tasks:</h1>
            <div className="flex items-center gap-6 h-12 font-bold text-green-600 border bg-zinc-800 border-green-500 rounded-lg p-4 mt-3">
                <p className='w-full ml-3'>Name</p>
                <p className="w-full">Victor</p>
                <p className="w-full">building</p>
                <p className='w-full'>26/10/2024</p>
            </div>
            <div className="flex items-center gap-6 h-12 font-bold text-zinc-200 bg-zinc-800 border border-green-500 rounded-lg p-4 mt-3">
                <p className='w-full ml-3'>Name</p>
                <p className="w-full">Carlos</p>
                <p className="w-full">Stop</p>
                <p className='w-full'>26/10/2024</p>
            </div>
            <div className="flex items-center gap-6 h-12 font-bold text-zinc-200 bg-zinc-800 border border-green-500 rounded-lg p-4 mt-3">
                <p className='w-full ml-3'>Name</p>
                <p className="w-full">Daniel</p>
                <p className="w-full">building</p>
                <p className='w-full'>26/10/2024</p>
            </div>
            <div className="flex items-center gap-6 h-12 font-bold text-zinc-200 border bg-zinc-800 border-green-500 rounded-lg p-4 mt-3">
                <p className='w-full ml-3'>Name</p>
                <p className="w-full">Victor</p>
                <p className="w-full">building</p>
                <p className='w-full'>26/10/2024</p>
            </div>
            <div className="flex items-center gap-6 h-12 font-bold text-zinc-200 bg-zinc-800 border border-green-500 rounded-lg p-4 mt-3">
                <p className='w-full ml-3'>Name</p>
                <p className="w-full">Carlos</p>
                <p className="w-full">building</p>
                <p className='w-full'>26/10/2024</p>
            </div>
            <div className="flex items-center gap-6 h-12 font-bold text-green-600 bg-zinc-800 border border-green-500 rounded-lg p-4 mt-3">
                <p className='w-full ml-3'>Name</p>
                <p className="w-full">Daniel</p>
                <p className="w-full">building</p>
                <p className='w-full'>26/10/2024</p>
            </div>
        </div>
        
    </div>
  )
}

export default TaskSection