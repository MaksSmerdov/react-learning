import { useState, ChangeEvent, FormEvent } from 'react';
import Button from '../../Button/Button';
import styles from '../TaskSection.module.scss';

interface TaskFormProps {
  onAddTask: (task: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [list, setList] = useState<string>('');

  function handleListChange(event: ChangeEvent<HTMLInputElement>) {
    setList(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (list.trim().length === 0) {
      return;
    }
    onAddTask(list);
    setList('');
  }

  return (
    <form className={styles['form__container']} onSubmit={handleSubmit}>
      <label htmlFor="list" className={styles['form__label']}>
        Введите задачу
      </label>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          type="text"
          id="list"
          value={list}
          onChange={handleListChange}
          className={styles['form__input']}
        />
        <Button type="submit">
          Принять
        </Button>
      </div>
    </form>
  );
}
