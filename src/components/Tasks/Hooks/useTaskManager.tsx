import { useState } from 'react';

interface Task {
  text: string;
  completed: boolean;
}

export default function useTaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskText: string) {
    setTasks([...tasks, { text: newTaskText, completed: false }]);
  }

  function handleTaskCompletion(index: number) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function handleTaskDeletion(index: number) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  function handleDeleteCompletedTasks() {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  }

  return {
    tasks,
    handleAddTask,
    handleTaskCompletion,
    handleTaskDeletion,
    handleDeleteCompletedTasks,
  };
}
