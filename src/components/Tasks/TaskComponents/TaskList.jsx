import styles from '../TaskSection.module.scss';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onTaskCompletion, onTaskDeletion }) {
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