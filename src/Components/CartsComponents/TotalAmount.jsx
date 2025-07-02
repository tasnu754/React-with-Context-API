import { useContext } from "react";
import CartsContext from "../Context/CartsContext";

const TotalAmount = () => {
  const { carts } = useContext(CartsContext);

  const total = carts.reduce(
    (prevTotal, cart) => prevTotal + cart.price * cart.quantity,
    0
  );
  return (
    <div className="text-4xl font-bold text-center p-8  bg-emerald-100 text-emerald-700">
      Total Amount : ${total.toFixed(2)}
    </div>
  );
};

export default TotalAmount;
