import styles from '../../MarketSection.module.scss';
import Button from '../../../Button/Button';
import { useState } from 'react';

export default function ProductCard({ product }: any) {
  const [showDesc, setShowDesc] = useState<boolean>(false);

  function handleToggleDescription() {
    setShowDesc(!showDesc);
  }

  return (
    <li className={styles['market__item']} key={product.id}>
      <h3 className={`${styles['market__header']}`}>{product.title}</h3>
      <img className={styles['market__img']} src={product.thumbnail} alt={product.title} />
      <div className={`${styles['market__price--div']}`}>
        <p className={styles['market__price--current']}>{product.price} $</p>
        <p className={styles['market__price--discount']}>{product.discountPercentage} $</p>
      </div>
      <Button onClick={handleToggleDescription}>{showDesc ? 'Скрыть' : 'Описание'}</Button>
      {showDesc && <p className={styles['market__description']}>{product.description}</p>}
    </li>
  );
}
