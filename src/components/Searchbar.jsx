import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
 <>
     <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Search"
          className="w-full p-4 rounded-full bg-light_grey border-blue  border-4 focus:outline-none"
        //   style={{ borderColor: theme }}
        //   value={query}
        //   onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="absolute right-3 top-1/2 bg-blue -translate-y-1/2 p-2 rounded-full"
        //   style={{ backgroundColor: theme }}
        //   onClick={handleSearch}
        >
          <SearchIcon sx={{ color: "white" }} />
        </button>
      </div>
    </div>
 </>
  )
}

export default Searchbar