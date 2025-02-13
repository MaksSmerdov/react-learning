import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '/logo-name.svg';
import { data } from './data';

export default function Header() {
  const [now, setNow] = useState(new Date());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles['header_container']}>
      <img src={logo} alt="React" />
      <span className={styles['header_title']}>{data[index].title}</span>
      <span>{now.toLocaleTimeString()}</span>
    </div>
  );
}
