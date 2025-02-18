import styles from './Table.module.scss';

interface SensorData {
  [key: string]: string | number;
}

interface TableType {
  sensorData: SensorData;
  unit: string;
  title: string;
}

export default function Table({ sensorData, unit, title }: TableType) {
  return (
    <table className={styles['table']}>
      <caption className={styles['table__title']}>{title}</caption>
      <thead className={styles['table__thead']}>
        <tr className={styles['table__tr']}>
          <th className={`${styles['table__th']} ${styles['table__left']}`}> Наименования </th>
          <th className={styles['table__th']}> Значения ({unit})</th>
        </tr>
      </thead>
      <tbody className={styles['table__tbody']}>
        {Object.entries(sensorData).map(([key, value]) => (
          <tr key={key} className={styles['table__tr']}>
            <td className={`${styles['table__td']} ${styles['table__left']}`}>{key}</td>
            <td className={`${styles['table__td']} ${styles['table__right']}`}>
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
