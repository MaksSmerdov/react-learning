import { useState, useEffect } from 'react';
import Button from './Button/Button';
import styles from './MarketSection.module.scss';

export default function MarketSection() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=9');
      const result = await response.json();
      setData(result.products);
      setLoading(false);
    } catch (error) {
      console.log('Ошибка получения данных: ', error);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleShowDesc() {
    setShow(!show);
  }

  if (loading) return <div>Загрузка данных...</div>;
  if (error) return <div>Ошибка получения данных: {error}</div>;

  return (
    <div className={styles['container']}>
      {data &&
        data.map((product) => (
          <div className={styles['market__list--container']} key={product.id}>
            <h3 className={`${styles['market__header']}`}>{product.title}</h3>
            <ul className={`${styles['market__list']} ${styles['list-reset']}`} >
              <li className={styles['market__item']}>
                <img className={styles['market__img']} src={product.thumbnail} />
                <p className={styles['market__price']}>{product.price}$</p>
                <Button onClick={handleShowDesc}>{show ? 'Показать описание' : 'Скрыть описание'}</Button>
                {show && <p className={styles['market__description']}>{product.description}</p>}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}
