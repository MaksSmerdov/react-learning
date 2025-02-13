import { useState } from 'react';

export default function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTaskText) {
    setTasks([...tasks, { text: newTaskText, completed: false }]);
  }

  function handleTaskCompletion(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function handleTaskDeletion(index) {
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
    handleDeleteCompletedTasks
  };
}