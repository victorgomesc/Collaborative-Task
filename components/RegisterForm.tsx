"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const createSignUpFormSchema = z.object({
  name: z.string().nonempty('Nome é um campo obrigatorio'),
  task: z.string().nonempty('Task e um campo obrigatorio'),
  state: z.string().nonempty('stado e um campo obrigatorio'),
  date: z.string().nonempty('Data e um campo obrigatorio')

})

type createSignUpFormData = z.infer<typeof createSignUpFormSchema>

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<createSignUpFormData>({
    resolver: zodResolver(createSignUpFormSchema)
  })

  function CreateTask(data: any) {
    setOutput(JSON.stringify(data, null, 2))
}

const [nameValue, setNameValue] = useState<string>('');
const [taskValue, setTaskValue] = useState<string>('');
const [stateValue, setStateValue] = useState<string>('');
const [dateValue, setDateValue] = useState<string>('');

const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setNameValue(event.target.value)
}

const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTaskValue(event.target.value)
}

const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setStateValue(event.target.value)
}

const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setDateValue(event.target.value)
}

  return (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="flex  flex-col h-full w-96 mt-10">

          <h1 className="text-2xl font-bold mb-4 text-zinc-200">
            Cadastre a tarefa
          </h1>

        <form onSubmit={handleSubmit(CreateTask)} className="flex flex-col h-full gap-y-4">
            <label className="text-lg font-bold text-zinc-200">
              Digite o nome da tarefa:
            </label>

            <input 
              type='text' 
              placeholder='Estudar' 
              className='bg-zinc-800 text-zinc-200 p-3' 
              {...register('name')}
              value={nameValue}
              onChange={handleNameChange}
            />
            {errors.name && <span>{errors.name.message}</span>}

            <label className="text-lg font-bold text-zinc-200">
              Digite o nome do autor:
            </label>

            <input 
              type='text' 
              placeholder='Victor' 
              className='bg-zinc-800 text-zinc-200 p-3'
              {...register('task')}
              value={taskValue}
              onChange={handleTaskChange}
            />
            {errors.task && <span>{errors.task.message}</span>}

            <label className="text-lg font-bold text-zinc-200">
              Digite o estado da tarefa:
            </label>

            <input 
              type='text' 
              placeholder='Product Backlog, etc' 
              className='bg-zinc-800 text-zinc-200 p-3'
              {...register('state')}
              value={stateValue}
              onChange={handleStateChange}
            />
            {errors.state && <span>{errors.state.message}</span>}

            <label className="text-lg font-bold text-zinc-200">
              Digite a data de criação:
            </label>

            <input 
              type="text" 
              placeholder='dd/mm/aaaa' 
              className='bg-zinc-800 text-zinc-200 p-3'
              {...register('date')}
              value={dateValue}
              onChange={handleDateChange}
            />
            {errors.date && <span>{errors.date.message}</span>}

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

export default RegisterForm