"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { z } from "zod";


export interface TaskFormProps {
  taskId?: string;
  name: string;
  task: string;
  state: string;
  date: string;
}

const createTaskFormSchema = z.object({
  name: z.string().nonempty('Nome é um campo obrigatorio'),
  task: z.string().nonempty('Task e um campo obrigatorio'),
  state: z.string().nonempty('stado e um campo obrigatorio'),
  date: z.string().nonempty('Data e um campo obrigatorio')

})

//type createTaskFormData = z.infer<typeof createTaskFormSchema>

console.log(createTaskFormSchema)

const RegisterTaskForm: React.FC<TaskFormProps> = () => {
  const [name, setName] = useState<string>('');
  const [task, setTask] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [date, setDate] = useState<string>('');

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = {
      name,
      task,
      state,
      date,
    };

    try {
      await axios.post('http://localhost:3333/tasks', newTask);
      alert('Tarefa cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar a tarefa:', error);
    }
  }
  

  return (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="flex  flex-col h-full w-96 mt-10">

          <h1 className="text-2xl font-bold mb-4 text-zinc-200">
            Cadastre a tarefa
          </h1>

        <form onSubmit={handleSubmit} className="flex flex-col h-full gap-y-4">
            <label className="text-lg font-bold text-zinc-200">
              Digite o nome da tarefa:
            </label>

            <input 
              type='text' 
              placeholder='Estudar' 
              className='bg-zinc-800 text-zinc-200 p-3 rounded-lg' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="text-lg font-bold text-zinc-200">
              Digite seu nome:
            </label>

            <input 
              type='text' 
              placeholder='Victor' 
              className='bg-zinc-800 text-zinc-200 p-3 rounded-lg'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />

            <label className="text-lg font-bold text-zinc-200">
              Digite a prioridade da tarefa:
            </label>

            <input 
              type='text' 
              placeholder='Pequena, Media, Grande' 
              className='bg-zinc-800 text-zinc-200 p-3 rounded-lg'
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <label className="text-lg font-bold text-zinc-200">
              Digite a data de conclusão da tarefa:
            </label>

            <input 
              type="text" 
              placeholder='dd/mm/aaaa' 
              className='bg-zinc-800 text-zinc-200 p-3 rounded-lg'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <div className="flex items-center justify-center">
              <button type="submit" className="bg-green-700 hover:bg-green-600 h-9 w-28 rounded-xl max-w-24 p-1 font-bold">
                Cadastrar
              </button>
            </div>
            
        </form>
    </div>
    </div>
    
  )
}

export default RegisterTaskForm