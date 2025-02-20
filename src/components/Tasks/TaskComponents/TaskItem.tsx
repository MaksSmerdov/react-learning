import React, { KeyboardEvent } from 'react';
import styles from '../TaskSection.module.scss';

interface Task {
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  index: number;
  onTaskCompletion: (index: number) => void;
  onTaskDeletion: (index: number) => void;
}

export default function TaskItem({ task, index, onTaskCompletion, onTaskDeletion }: TaskItemProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onTaskCompletion(index);
    }
  };

  return (
    <div className={styles['task__item']}>
      <input
        className={styles['checkbox__input']}
        id={index.toString()}
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskCompletion(index)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      />

      <label className={styles['checkbox__label']} htmlFor={index.toString()}>
        <span
          className={styles['task__span']}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
          }}
        >
          {task.text}
        </span>
      </label>
    </div>
  );
}
