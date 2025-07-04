import { createContext, useState } from "react";

const CartsContext = createContext();
export default CartsContext;

export const CartsContextProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  return (
    <CartsContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartsContext.Provider>
  );
};
