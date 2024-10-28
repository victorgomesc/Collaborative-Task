import Header from '@/components/Header'
import HeaderTitle from '@/components/HeaderTitle'
import RegisterForm from '@/components/RegisterForm'
import React from 'react'

export default function Register() {
  return (
    <div className='text-white'>
      <HeaderTitle />
      <Header />
      <RegisterForm />
    </div>
  )
}

