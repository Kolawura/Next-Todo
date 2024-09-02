"use client"
import Image from "@/Component/Image";
import { TaskInput } from "@/Component/TaskInput";
import { Tasks } from "@/Component/Tasks"
import Theme from "@/Component/Theme";
import { useEffect, useState } from "react";
import { Task } from "@/Component/Type"

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const getTask = localStorage.getItem('tasks');
    if(getTask){
      setTasks(JSON.parse(getTask))
    }
  }, [])

  const addTask = (text: string) => {
    const newTodo: Task = {
      id: Date.now(),
      text,
      complete: false,
    };
    const newTasks = [...tasks, newTodo];
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTasks(newTasks);
  };

  const toggleComplete = (id: number) => {
    const newTasks = tasks.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    )
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTasks(newTasks);
  };

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((todo) => todo.id !== id)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTasks(newTasks);
  };

  return (
    <main className="absolute bg-lightBg dark:bg-darkBg w-full">
      <div className=" w-full h-full">
        <Image />
        <div className="relative top-10 flex justify-center">
          <div className="flex flex-col items-center h-screen md:w-1/3 w-4/5">
            <Theme />
            <TaskInput addTask={addTask} />
            <Tasks tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </main>
  );
}
