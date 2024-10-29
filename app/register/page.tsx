"use client"

import Header from '@/components/Header'
import HeaderTitle from '@/components/HeaderTitle'
import RegisterForm from '@/components/RegisterForm'
import React from 'react'
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from '@/lib/react-query';


export default function Register() {
  return (
    <div className='text-white'>
      <QueryClientProvider client={queryClient}>
        <HeaderTitle />
        <Header />
        <RegisterForm />
      </QueryClientProvider>
      
    </div>
  )
}

