import { useEffect, useState } from "react";

const useUsersData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const controller = new AbortController();

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url, controller.signal);
      const data = await res.json();
      setData(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();
    return () => {
      controller.abort();
    };
  }, []);
  return { isLoading, error, data };
};

export default useUsersData;
