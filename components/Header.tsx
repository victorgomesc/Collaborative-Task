import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex gap-6 w-full h-16 items-center bg-zinc-900">
        <Link href="/cadastro" >
            <div className="text-xl font-bold text-green-500">
                Cadastrar
            </div>
        </Link>

        <div className="text-xl font-bold text-green-500">
            Atualizar
        </div>

        <div className="text-xl font-bold text-green-500">
            Buscar
        </div>

        <div className="text-xl font-bold text-green-500">
            Deletar
        </div>
    </div>
  )
}

export default Header