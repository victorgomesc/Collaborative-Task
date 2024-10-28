import React from 'react'

const RegisterForm = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="flex  flex-col h-full w-96 mt-10">
        <h1 className="text-xl font-bold mb-4">Cadastre a tarefa:</h1>
        <form className="flex flex-col h-full gap-y-4">
            <label>Digite o nome da tarefa:</label>
            <input type='text' />
            <label>Digite o nome do autor:</label>
            <input />
            <label>Digite o estado da tarefa:</label>
            <input />
            <div className="flex items-center justify-center">
              <button className="bg-green-600 h-8 rounded-xl max-w-24 p-1">Cadastrar</button>
            </div>
        </form>
    </div>
    </div>
    
  )
}

export default RegisterForm