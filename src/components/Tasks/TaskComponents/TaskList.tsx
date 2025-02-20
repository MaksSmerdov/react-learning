import React from 'react';
import styles from '../TaskSection.module.scss';
import TaskItem from './TaskItem';

interface Task {
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onTaskCompletion: (index: number) => void;
  onTaskDeletion: (index: number) => void;
}

export default function TaskList({ tasks, onTaskCompletion, onTaskDeletion }: TaskListProps) {
  return (
    <div className={styles['task__container']}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onTaskCompletion={onTaskCompletion}
          onTaskDeletion={onTaskDeletion}
        />
      ))}
    </div>
  );
}
