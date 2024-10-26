import React from 'react'

const Header = () => {
  return (
    <div className="flex gap-6 w-full h-16 items-center bg-zinc-900">
        <div className="text-xl font-bold text-green-500">
            Cadastrar
        </div>

        <div className="text-xl font-bold text-green-500">
            Atualizar
        </div>

        <div className="text-xl font-bold text-green-500">
            Deletar
        </div>
    </div>
  )
}

export default Header