import { ChangeEvent } from 'react';

interface SearchCardProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchCard({ value, onChange }: SearchCardProps) {
  return (
    <label>
      <span>Поиск</span>
      <input
        type="text"
        placeholder="Введите текст"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
