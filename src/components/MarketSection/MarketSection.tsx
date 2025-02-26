import { ChangeEvent, useState, useEffect } from 'react';
import styles from './MarketSection.module.scss';
import ProductCard from './components/ProductCard/ProductCard';
import SearchCard from './components/SearchCard/SearchCard';
import useFetch from './hooks/useFetch';

export default function MarketSection() {
  const {loading, error, data} = useFetch();
  const [text, setText] = useState('');

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  const filteredList = data.filter((product) => product.title.toLowerCase().includes(text.toLowerCase()));

  if (loading) return <div>Загрузка данных...</div>;
  if (error) return <div>Ошибка получения данных: {error}</div>;

  return (
    <div className={styles['container']}>
      <SearchCard value={text} onChange={handleSearch} />
      <ul className={`${styles['market__list']} ${styles['list-reset']}`}>
        {filteredList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
