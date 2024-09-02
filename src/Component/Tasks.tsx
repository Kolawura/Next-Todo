"use client"
import React, { useState, useEffect } from 'react'
import { TaskItem } from './TaskItem'
import { Task, TasksProps } from './Type'

export const Tasks = ({ tasks, toggleComplete, deleteTask }: TasksProps) => {

    return (
        <div>{
            tasks?.map((task: Task) => {
                return (<TaskItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />)
            })
        }</div>
    )
}
