import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex gap-6 w-full h-16 items-center">
        <Link href="/register" >
            <div className="text-xl font-bold text-green-600">
                Cadastrar
            </div>
        </Link>

        <Link href="/update">
            <div className="text-xl font-bold text-green-600">
                Atualizar
            </div>
        </Link>
        
        <Link href="/search">
            <div className="text-xl font-bold text-green-600">
                Buscar
            </div>
        </Link>
        
        <Link href="/delete">
            <div className="text-xl font-bold text-green-600">
                Deletar
            </div>
        </Link>
        
    </div>
  )
}

export default Header