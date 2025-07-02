import CartsContext from "../Components/Context/CartsContext";
import TotalAmount from "../Components/CartsComponents/TotalAmount";
import CartsTable from "../Components/CartsComponents/CartsTable";

const Carts = () => {
  return (
    <div>
      <TotalAmount></TotalAmount>
      <CartsTable></CartsTable>
    </div>
  );
};

export default Carts;
