"use client"
import Image from "@/Component/Image";
import { TaskInput } from "@/Component/TaskInput";
import { Tasks } from "@/Component/Tasks"
import Theme from "@/Component/Theme";
import { useEffect, useState } from "react";
import { Task } from "@/Component/Type"

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<string>('light')
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
  const deleteComTask = () => {
    const newTasks = tasks.filter((todo) => todo.complete === false)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTasks(newTasks);
  };

    useEffect(() => {
        const getTheme = localStorage.getItem('theme') || 'light'
        document.documentElement.classList.add(getTheme)
        setTheme(getTheme)

    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        document.documentElement.classList.remove(theme)
        document.documentElement.classList.add(newTheme)
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }

  return (
    <main className="bg-lightBg dark:bg-darkBg w-full h-screen">
      
        <Image theme={theme} />
        <div className="absolute top-14 md:top-20 m-auto w-full flex justify-center">
          <div className="flex flex-col items-center md:w-1/3 w-5/6">
            <Theme theme={theme} toggleTheme={toggleTheme} />
            <TaskInput addTask={addTask} />
            <Tasks tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} deleteComTask={deleteComTask} />
          </div>
        </div>
      
    </main>
  );
}
