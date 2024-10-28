"use client"

import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import SectionTaskProvider from "@/components/SectionTaskProvider";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen">
      <HeaderTitle />
      <Header />
      <SectionTaskProvider />
    </div>
        
  );
}
