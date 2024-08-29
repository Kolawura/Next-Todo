import { Task } from "@/Component/Task";
import Theme from "@/Component/Theme";

export default function Home() {
  return (
    <main className="pt-16 bg-lightBg dark:bg-darkBg flex flex-col items-center h-screen w-full">
      <Theme/>
      <Task/>
    </main>
  );
}
