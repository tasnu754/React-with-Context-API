import { useContext } from "react";
import { useParams } from "react-router-dom";
import HomeCardsContext from "../Components/Context/HomeCardsContext";

const ProductDetails = () => {
  const { cards } = useContext(HomeCardsContext);
  const { id } = useParams();

  const data = cards.find((card) => card.id == id);

  return (
    <div className="max-w-6xl mx-auto mt-20 p-6 grid md:grid-cols-2 gap-10 items-center">
      <img
        src={data?.image}
        alt={data?.image}
        className="w-full  object-cover rounded shadow"
      />
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <p className="text-gray-700">{data?.description}</p>
        <p className="text-2xl font-semibold text-[#00796B]">{data?.price}</p>
        <button className=" text-white px-6 py-3 rounded bg-[#00796B]  hover:bg-[#17554d] transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
