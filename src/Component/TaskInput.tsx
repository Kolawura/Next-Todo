'use client'
import { useState } from "react"
import { TaskInputProps } from "./Type"

export const TaskInput = ({addTask}:TaskInputProps) => {
  const [text, setText] = useState<string>('')

  const handleSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
    if(text.trim()){
      addTask(text.trim())
      setText('')
    }
  }

  return (
    <form className="relative flex items-center w-full mt-4 mb-4" onSubmit={handleSubmit}>
      <input className="checkBox w-6 h-6 absolute translate-x-1/2 rounded-full appearance-none" type="checkbox"  />
      <input className='w-full rounded-lg pl-16 p-4 border-none bg-white dark:bg-gray-800 text-lg text-gray-500 dark:text-gray-300 focus:outline-none' type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Create a new todo...' />
    </form>
  )
}

