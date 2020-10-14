import { useEffect, useState } from 'react';
import { DataContext } from './commonDataContext';
import { COMMON_DATA } from './types';

const DataProvider = ({
  children,
}) => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const data = {};
    data[COMMON_DATA] = data;
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
};

export default DataProvider;
