"use client"
import React, { useState, useEffect } from 'react'
import { TaskItem } from './TaskItem'
import { Task, TasksProps } from './Type'

export const Tasks = ({ tasks, toggleComplete, deleteTask, deleteComTask }: TasksProps) => {
    const [showAllTask, setShowAllTask] = useState<boolean>(true)

    const completeTask = tasks.filter((task) => !task.complete)
    const noOfComplateTask = completeTask.length;


    const setCompleteTask = () => {
        setShowAllTask(false)
    }
    const setAllTask = () => {
        setShowAllTask(true)
    }

    

    return (
        <div className='w-full'>
            <div className='border-none rounded-lg shadow-lg bg-white dark:bg-gray-800 p-4 mt-2 w-full h-fit max-h-full'>{
                showAllTask ?
                    (tasks?.map((task: Task) => {
                        return (<TaskItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />)
                    })) :
                    (completeTask?.map((task: Task) => {
                        return (<TaskItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />)
                    }))
            }
                <footer className='flex justify-between items-center p-4 text-sm'>
                    <a className='text-gray-400 hover:text-BlueColor'>{noOfComplateTask} items left</a>
                    <div className='hidden md:block'>
                        <div className='flex justify-between gap-2 text-gray-400 '>
                            <a onClick={setAllTask} className='cursor-pointer hover:text-BlueColor'>All</a>
                            <a className='cursor-pointer hover:text-BlueColor'>Active</a>
                            <a onClick={setCompleteTask} className='cursor-pointer hover:text-BlueColor'>Completed</a>
                        </div>
                    </div>
                    <a onClick={deleteComTask} className='cursor-pointer text-gray-400 hover:text-BlueColor'>Clear Completed</a>
                </footer>
            </div>
            <div className='block md:hidden shadow-lg'>
                <div className='flex justify-between text-gray-400 text-sm font-semibold bg-white dark:bg-gray-800 p-4 pl-16 pr-16 mt-4 border-none rounded-lg'>
                    <a onClick={setAllTask} className='cursor-pointer hover:text-BlueColor'>All</a>
                    <a className='cursor-pointer hover:text-BlueColor'>Active</a>
                    <a onClick={setCompleteTask} className='cursor-pointer hover:text-BlueColor'>Completed</a>
                </div>
            </div>
        </div>
    )
}
