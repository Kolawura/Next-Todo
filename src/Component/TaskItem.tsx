import { TaskProps } from "./Type"

export const TaskItem = ({ task, toggleComplete, deleteTask }: TaskProps) => {
  return (
    <div className="flex justify-between w-full items-center relative">
      <input className="cursor-pointer checkBox border-2 dark:border-gray-600 border-gray-300 w-6 h-6 absolute translate-x-1/2 rounded-full appearance-none" type="checkbox" checked={task.complete} onChange={() => toggleComplete(task.id)} />
      {task.complete?
        (<p className="line-through text-gray-300 dark:text-gray-600 w-full cursor-pointer pl-16 pr-16 p-4 border-none text-base font-medium focus:outline-none">{task.text}</p>)
        :(<p className="text-gray-500 dark:text-gray-300 w-full cursor-pointer pl-16 pr-16 p-4 border-none text-base font-medium focus:outline-none">{task.text}</p>)}
      <button className="absolute right-4" type="button" onClick={() => deleteTask(task.id)} ><img src="/images/icon-cross.svg" /></button>
      <hr/>
    </div>
  )
}
