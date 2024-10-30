"use client"

import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import { QueryClientProvider } from "react-query";
import { queryClient } from '../lib/react-query'
import TaskSection from "@/components/TaskSection";


export default function Home() {
  return (
    <div className="h-screen">
      <QueryClientProvider client={queryClient}>
        <HeaderTitle />
        <Header />
        <TaskSection />
      </QueryClientProvider>
    </div>
        
  );
}
