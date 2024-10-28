import DeleteForm from '@/components/DeleteForm'
import Header from '@/components/Header'
import HeaderTitle from '@/components/HeaderTitle'
import React from 'react'

export default function Delete() {
  return (
    <div className='text-white'>
        <HeaderTitle />
        <Header />
        <DeleteForm />
    </div>
  )
}
