import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const QuizDataContext = createContext();

export const useQuizDataContext = () => useContext(QuizDataContext);

const QuizDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('./assets/data.json');
        if (res.status === 200) {
          const resData = await res.json();
          setData(resData.categories);
        }
      } catch (err) {
        setError('Some error occurred!');
      }
    };
    fetchData();
  }, []);
  const value = useMemo(() => ({ data, error }), [data, error]);

  return <QuizDataContext.Provider value={value}>{children}</QuizDataContext.Provider>;
};

export default QuizDataProvider;
