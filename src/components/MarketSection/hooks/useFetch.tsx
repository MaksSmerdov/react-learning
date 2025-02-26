import { useState, useEffect } from 'react';

export default function useFetch() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/products');
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

  return { data, loading, error };
}
