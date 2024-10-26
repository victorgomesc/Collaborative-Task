import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import TaskSection from "@/components/TaskSection";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <HeaderTitle />
      <Header />
      <TaskSection />
    </div>
  );
}
