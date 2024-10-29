import axios from 'axios'
import { useQuery } from 'react-query'
import React from 'react'

interface Task {
    taskId: string;
    task: string;
    name: string;
    state: string;
    date: string;
}

const TaskSection = () => {
    const { data, isLoading, error } = useQuery<Task[]>('tasks', () => {
        return axios.get("http://localhost:3333/tasks").then((response) => response.data);
    },{
        retry: 5,
        refetchOnWindowFocus: true,
        refetchInterval: 50000,
    });

    if(isLoading){
        return <div className='text-3xl'>Loading...</div>
    }

    if (error) {
        return <div className="loading">Algo deu errado!</div>;
      }


  return (
    <div className="w-full h-full flex flex-col items-center">
        <div className="w-4/5 p-6">
            <h1 className="text-green-500 font-bold">List Tasks:</h1>
            <div>
                {data?.map((task: Task) => {
                    return(
                    <div 
                    key={task.taskId} 
                    className="flex items-center gap-6 h-14 font-bold 
                    text-zinc-200 border bg-zinc-800 border-green-500 rounded-lg p-4 mt-3"
                    >
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