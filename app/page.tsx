import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import TaskSection from "@/components/TaskSection";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen">
      <HeaderTitle />
      <Header />
      <TaskSection />
    </div>
  );
}
