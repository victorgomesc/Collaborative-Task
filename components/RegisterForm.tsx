import React from 'react'

const RegisterForm = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="flex  flex-col h-full w-96 ">
        <h1 className="text-xl font-bold">Cadastre a tarefa:</h1>
        <form className="flex flex-col">
            <label>Digite o nome da tarefa:</label>
            <input type='text' />
            <label>Digite o nome do autor:</label>
            <input />
            <label>Digite o estado da tarefa:</label>
            <input />
            <button>Cadastrar</button>
        </form>
    </div>
    </div>
    
  )
}

export default RegisterForm