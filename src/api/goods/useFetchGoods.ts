import { useState, useEffect } from "react";
import { fetcher, HttpMethod } from "../../config/api";

export const useFetchGoods = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetcher({
          method: HttpMethod.GET,
          url: "/goods/filter",
        }, { withToken: true });
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
