import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import React from 'react'
import { queryClient } from '@/lib/react-query';
import { Trash2 } from 'lucide-react';

interface Task {
    id?: string;
    taskId?: string;
    task: string;
    name: string;
    state: string;
    date: string;
}

const DeleteTask = () => {
    const { data, isLoading, error } = useQuery<Task[]>('tasks', async () => {
        return axios.get("http://localhost:3333/tasks").then((response) => response.data);
    },{
        retry: 5,
        refetchOnWindowFocus: true,
        refetchInterval: 50000,
    });

    const { mutate } = useMutation(
      async (id: string) => {
          return axios.delete(`http://localhost:3333/tasks/${id}`);
      },
      {
          onSuccess: () => {
              queryClient.invalidateQueries('tasks');
          },
          onError: (error) => {
              console.error('Erro ao deletar tarefa:', error);
          },
      }
  );

    if(isLoading){
        return <div className='text-3xl'>Loading...</div>
    }

    if (error) {
        return <div className="loading">Algo deu errado!</div>;
      }


  return (
    <div className="w-full h-full flex flex-col items-center">
        <div className="w-4/5 p-6">
            <h1 className="text-green-500 font-bold">Lista de Tarefas:</h1>
            <div className=''>
                {data?.map((task: Task) => {
                    return(
                    <div 
                    key={task.id} 
                    className="flex items-center gap-6 h-14 font-bold 
                    text-zinc-200 border bg-zinc-800 border-zinc-800 hover:border-green-600 rounded-lg p-4 mt-3"
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
                        <button onClick={() => mutate(task.id || '')}
                          className="p-1 bg-red-700 hover:bg-red-500 rounded-lg">
                          <Trash2 />
                        </button>
                    </div>
                    )
                })}
            </div>
        </div>
        
    </div>
  )
}

export default DeleteTask