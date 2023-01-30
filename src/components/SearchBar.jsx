import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ searchTravelFunction }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    searchTravelFunction(query.toLowerCase());
  };

  return (
    <form
      className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
          type="text"
          placeholder="Search Destination"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">
          <AiOutlineSearch size={20} className="icon" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
