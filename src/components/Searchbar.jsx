import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';
import useQueryHospitals from '../hooks/useQueryHospitals';

const Searchbar = () => {
  const { loading, hospitals } = useQueryHospitals();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (loading) return;

    try {
      const searchedHospitals = hospitals.filter((hospital) => {
        return hospital?.name.toLowerCase().includes(query.toLowerCase());
      });

      navigate("/searched-hospitals", {
        state: { searchedHospitals },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Search for Hospitals by name"
          className="w-full p-2 md:p-3 lg:p-4 rounded-full bg-light_grey border-blue border-4 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="absolute right-3 top-1/2 bg-blue -translate-y-1/2 p-1 lg:p-2 rounded-full"
          onClick={handleSearch}
        >
          <SearchIcon sx={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
