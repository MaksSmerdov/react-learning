import { useState, useEffect } from "react";

export function useFetchData(api) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:3002/api/${api}`);
      const data = await response.json();
      setData(data);
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
  }, []);

  return {loading, data}
} 