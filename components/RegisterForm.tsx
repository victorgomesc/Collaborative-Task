import React from 'react'

const RegisterForm = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="flex  flex-col h-full w-96 mt-10">

          <h1 className="text-2xl font-bold mb-4 text-zinc-200">
            Cadastre a tarefa
          </h1>

        <form className="flex flex-col h-full gap-y-4">
            <label className="text-lg font-bold text-zinc-200">
              Digite o nome da tarefa:
            </label>

            <input type='text' className='bg-zinc-800 text-zinc-200' />

            <label className="text-lg font-bold text-zinc-200">
              Digite o nome do autor:
            </label>

            <input className='bg-zinc-800 text-zinc-200'/>

            <label className="text-lg font-bold text-zinc-200">
              Digite o estado da tarefa:
            </label>

            <input className='bg-zinc-800 text-zinc-200'/>

            <div className="flex items-center justify-center">
              <button className="bg-green-700 hover:bg-green-600 h-8 rounded-xl max-w-24 p-1 font-bold">
                Cadastrar
              </button>
            </div>
            
        </form>
    </div>
    </div>
    
  )
}

export default RegisterForm