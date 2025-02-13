import { useState } from 'react';
import TaskForm from './TaskComponents/TaskForm';
import TaskList from './TaskComponents/TaskList';
import Button from '../Button/Button';
import useTaskManager from './Hooks/useTaskManager';
import styles from './TaskSection.module.scss';

export default function TaskSection() {
  const { tasks, handleAddTask, handleTaskCompletion, handleDeleteCompletedTasks, handleTaskDeletion } =
    useTaskManager();

  return (
    <div className={styles['container']}>
      <TaskForm onAddTask={handleAddTask} />
      <div className={styles['task__title']}>Список задач:</div>
      <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} onTaskDeletion={handleTaskDeletion} />
      <Button onClick={handleDeleteCompletedTasks}>Удалить завершенные</Button>
    </div>
  );
}
