export interface Task {
  id: number;
  text: string;
  complete: boolean;
}

export interface TasksProps {
  tasks: Task[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
  deleteComTask: () => void;
}

export interface TaskProps {
  task: Task;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

export interface TaskInputProps {
  addTask: (text: string) => void;
}

export interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}
export interface ImageProps {
  theme: string
}
