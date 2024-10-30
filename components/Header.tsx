import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex gap-6 w-full h-16 items-center p-6">
        <Link href="/" >
            <div className="text-xl font-bold text-green-600 border border-zinc-900 
                hover:text-green-400 justify-center flex hover:border-green-400 rounded-lg p-1 w-28">
                Inicio
            </div>
        </Link>

        <Link href="/register" >
            <div className="text-xl font-bold text-green-600 border border-zinc-900 
                hover:text-green-400 justify-center flex hover:border-green-400 rounded-lg p-1 w-28">
                Cadastrar
            </div>
        </Link>
        
        <Link href="/delete">
            <div className="text-xl font-bold text-green-600  border border-zinc-900 
                hover:text-green-400 justify-center flex hover:border-green-400 rounded-lg p-1 w-28">
                Deletar
            </div>
        </Link>
        
    </div>
  )
}

export default Header