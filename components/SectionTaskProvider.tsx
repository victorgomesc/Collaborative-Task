import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from '../lib/react-query'
import TaskSection from "./TaskSection";


import React from 'react'

const SectionTaskProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <TaskSection />
    </QueryClientProvider>
  )
}

export default SectionTaskProvider