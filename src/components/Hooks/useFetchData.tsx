import { useState, useEffect } from "react";

export function useFetchData<T>(api: string): { loading: boolean; data: T } {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>({} as T);

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:3002/api/${api}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [api]);

  return { loading, data };
}
