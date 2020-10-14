import { useState, useEffect } from 'react';
import * as R from 'ramda';

export const useFetch = (fn, options) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(false);
  }, [data])

  const fetch = async (...args) => {
    setLoading(true);

    try {
      const response = await fn(...args);
      setData({
        data: response,
        error: undefined,
      });
    } catch (error) {
      setData({
        data: undefined,
        error,
      });
    }
  };

  useEffect(() => {
    const onMount = R.prop('onMount', options);

    if (onMount) {
      fetch(onMount);
    }
  }, []);

  return {
    loading,
    data: data.data,
    error: data.error,
    fetch,
  };
};
