import { createContext, useEffect, useState } from "react";

const CartsContext = createContext();
export default CartsContext;

export const CartsContextProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/cart");

      if (!res.ok) throw new Error("Failed to load data");
      const data = await res.json();

      setCarts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartsContext.Provider
      value={{ carts, setCarts, loading, error, fetchData }}
    >
      {children}
    </CartsContext.Provider>
  );
};
