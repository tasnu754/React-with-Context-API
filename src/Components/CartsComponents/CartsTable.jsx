import { useContext } from "react";
import CartsContext from "../Context/CartsContext";

const CartsTable = () => {
  const { carts, setCarts } = useContext(CartsContext);
  console.log(carts);

  const handleRemove = (id) => {
    const updatedCarts = carts.filter((cart) => cart.id !== id);
    setCarts(updatedCarts);
  };
  return (
    <div className="overflow-x-auto  shadow-lg border border-gray-200">
      <table className="min-w-full bg-white  overflow-hidden">
        <thead className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase">
              Image
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase">
              Title
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase">
              Price
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase">
              Quantity
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {carts.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 transition-all duration-200"
            >
              <td className="px-6 py-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-12 object-cover rounded-md border"
                />
              </td>
              <td className="px-6 py-4 text-gray-800 font-medium">
                {item.title}
              </td>
              <td className="px-6 py-4 text-teal-700 font-semibold">
                ${item.price}
              </td>
              <td className="px-6 py-4">
                <span className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">
                  {item.quantity}
                </span>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-100 hover:bg-red-200 text-red-600 font-semibold px-4 py-1.5 rounded-full text-sm transition duration-150"
                >
                  ✖ Remove
                </button>
              </td>
            </tr>
          ))}
          {carts.length === 0 && (
            <tr>
              <td colSpan="5" className="px-6 py-8 text-center text-gray-400">
                Your cart is empty 🛒
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartsTable;
