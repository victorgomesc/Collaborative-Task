"use client"

import Header from '@/components/Header'
import HeaderTitle from '@/components/HeaderTitle'
import RegisterTaskForm from '@/components/RegisterTaskForm'
import React from 'react'

interface TaskFormProps {
  name: string;
  task: string;
  state: string;
  date: string;
}

export default function Register() {
  const taskFormProps: TaskFormProps = {
    name: "Nome da Tarefa",
    task: "Descrição da Tarefa",
    state: "pendente",
    date: "data",
  };

  return (
    <div className='text-white'>
        <HeaderTitle />
        <Header />
        <RegisterTaskForm {...taskFormProps} />
    </div>
  )
}
