type Task = { id: number; title: string; description: string; completed: boolean };
 
let tasks: Task[] = [
  { id: 1, title: "Buy groceries", description:'', completed: false },
];

export const fetchTasks = async () => {
  return tasks;
};

export const addTask = async (task: Partial<Task>) => {
    const newTask = {
      id: tasks.length + 1,
      ...task,
      completed: false,
    };
    tasks.push(newTask);
    return newTask;
  };
  
export const toggleTask = async (id: number) => {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
  }
};
