import { useContext, useState } from "react";
import HomeCardsContext from "../Context/HomeCardsContext";

const Filter = () => {
  const { setfilterValue } = useContext(HomeCardsContext);
  const [filter, setFilter] = useState("high");

  const handleFilterClick = () => {
    setfilterValue(filter);
  };

  return (
    <div className="flex gap-2 w-full sm:w-1/2 mt-10">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className=" px-4 py-2 border rounded-md shadow-sm text-gray-700"
      >
        <option value="high">High to Low</option>
        <option value="low">Low to High</option>
      </select>
      <button
        onClick={handleFilterClick}
        className="bg-[#00796B]  hover:bg-[#17554d] text-white px-4 py-2 rounded-md"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
