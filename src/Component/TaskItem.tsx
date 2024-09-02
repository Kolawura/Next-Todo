import { TaskProps } from "./Type"

export const TaskItem = ({ task, toggleComplete, deleteTask }: TaskProps) => {
  return (<div>
    <input className="checkBox w-6 h-6 absolute translate-x-1/2 rounded-full appearance-none" type="checkbox" checked={task.complete} onChange={() => toggleComplete(task.id)} />
    <p>{task.text}</p>
    <button type="button" onClick={() => deleteTask(task.id)} ></button>
  </div>)
}
