import axios from 'axios'
import { useQuery } from 'react-query'
import React from 'react'

interface Task {
    id?: string;
    taskId?: string;
    task: string;
    name: string;
    state: string;
    date: string;
}

const TaskSection = () => {
    const { data, isLoading, error } = useQuery<Task[]>('tasks', async () => {
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
            <h1 className="text-green-500 font-bold text-xl">Lista de Tarefas:</h1>
            <div className=''>
                <div className="flex items-center gap-6 h-14 font-extrabold
                text-zinc-100 border bg-zinc-800 border-zinc-800 hover:border-green-600 rounded-lg p-4 mt-3">
                        <p className='w-full ml-3 font-bold'>Tarefa</p>
                        <p className="w-full font-bold">Nome</p>
                        <p className="w-full font-bold">Prioridade</p>
                        <p className='w-full font-bold'>Entrega</p>
                </div>
                {data?.map((task: Task) => {
                    return(
                    <div 
                    key={task.id} 
                    className="flex items-center gap-6 h-14  
                    text-zinc-300 border bg-zinc-800 border-zinc-800 hover:border-green-600 rounded-lg p-4 mt-3"
                    >
                        <p className='w-full ml-3'>{task.task}</p>
                        <p className="w-full">{task.name}</p>
                        <div className='w-full flex items-center gap-2'>
                            <p 
                             className={`w-3 h-3 flex rounded-full ${
                                task.state === 'Pequena'
                                ? 'bg-green-600'
                                : task.state === 'Media'
                                ? 'bg-yellow-500'
                                : task.state === 'Grande'
                                ? 'bg-red-600'
                                : 'bg-gray-500' 
                                }`}>
                            </p>
                        <p>{task.state}</p>
                        </div>
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