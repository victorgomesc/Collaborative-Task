"use client";

import DeleteTask from '@/components/DeleteTask'
import Header from '@/components/Header'
import HeaderTitle from '@/components/HeaderTitle'
import { queryClient } from '@/lib/react-query';
import React from 'react'
import { QueryClientProvider } from 'react-query';

export default function Delete() {
  return (
    <div className='text-white'>
      <QueryClientProvider client={queryClient}>
        <HeaderTitle />
        <Header />
        <DeleteTask />
      </QueryClientProvider>
        
    </div>
  )
}
