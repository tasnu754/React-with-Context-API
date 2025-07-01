import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex w-full max-w-md shadow-md rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search Item"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 border-r outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-[#00796B]  hover:bg-[#17554d] text-white px-4 py-2 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
