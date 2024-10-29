import { getTasks } from '@/data/tasks'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const TaskSection = () => {
    const { data: tasks } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
    })


  return (
    <div className="w-full h-full flex flex-col items-center">
        <div className="w-4/5 p-6">
            <h1 className="text-green-500 font-bold">List Tasks:</h1>
            <div>
                {tasks?.map((task) => {
                    return(
                    <div key={task.id} className="flex items-center gap-6 h-12 font-bold 
                        text-zinc-200 border bg-zinc-800 border-green-500 rounded-lg p-4 mt-3">
                        <p className='w-full ml-3'>{task.task}</p>
                        <p className="w-full">{task.name}</p>
                        <p className="w-full">{task.state}</p>
                        <p className='w-full'>{task.date}</p>
                    </div>
                    )
                })}
            </div>
        </div>
        
    </div>
  )
}

export default TaskSection