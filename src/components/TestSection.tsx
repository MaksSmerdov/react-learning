import { ChangeEvent, useState, useEffect } from 'react';
import Button from './Button/Button';

interface ApiResponse {
  [key: string]: number;
}

export default function TestComponent() {
  const [now, setNow] = useState(new Date());
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ApiResponse>();
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3002/api/mpa3-data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Loading error:', error);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData();
    const intervalFetch = setInterval(() => {
      fetchData();
    }, 5000);
    return () => {
      clearInterval(intervalFetch);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlerInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText('');
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Ошибка получения данных</div>;

  return (
    <>
      <div
        style={{
          width: '600px',
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button onClick={() => setCount(count + 1)}>Счет: {count}</Button>
          <input type="text" placeholder="Введите текст" onChange={handlerInputText} value={text} />
          <Button onClick={clearText}>Сброс</Button>
          <div>{now.toLocaleTimeString()}</div>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {data &&
            Object.entries(data.temperatures).map(([key, value]) => (
              <table style={{ textAlign: 'center' }}>
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          {data &&
            Object.entries(data.pressures).map(([key, value]) => (
              <table>
                <thead>
                  <tr>
                    <th>key2</th>
                    <th>value2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                </tbody>
              </table>
            ))}
        </div>
      </div>
    </>
  );
}
