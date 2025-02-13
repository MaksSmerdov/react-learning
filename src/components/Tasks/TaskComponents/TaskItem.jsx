import Button from '../../Button/Button';
import styles from '../TaskSection.module.scss';

export default function TaskItem({ task, index, onTaskCompletion, onTaskDeletion }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onTaskCompletion(index);
    }
  };

  return (
    <div className={styles['task__item']}>
      <input
        className={styles['checkbox__input']}
        id={index}
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskCompletion(index)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      />

      <label className={styles['checkbox__label']} htmlFor={index}>
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
