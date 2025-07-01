import { createContext, useEffect, useState } from "react";

const HomeCardsContext = createContext();
export default HomeCardsContext;

export const HomeCardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setsearchQuery] = useState("");
  const [filterValue, setfilterValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/products");

        if (!res.ok) throw new Error("Failed to load data");
        const data = await res.json();

        setCards(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <HomeCardsContext.Provider
      value={{
        cards,
        loading,
        error,
        searchQuery,
        setsearchQuery,
        filterValue,
        setfilterValue,
      }}
    >
      {children}
    </HomeCardsContext.Provider>
  );
};
