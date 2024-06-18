import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useQueryHospitals from "../hooks/useQueryHospitals";
import HospitalCard from "../components/HospitalCard";
import { emojis } from "../data/Reviews";
import Navbar from "../components/Navbar";
import LocationSlider from "../sections/home-sections/LocationSlider";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

const HospitalsPage = () => {
  const { loading, hospitals = [] } = useQueryHospitals();
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const searchResults = location.state?.searchedHospitals || location.state?.filteredLocation || hospitals;

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageSizeChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    // Reset to the first page when changing the number of items per page
    setCurrentPage(1);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchResults.slice(startIndex, endIndex);
  };

  const pageNumbers = [];
  const maxPageButtons = 4;
  const halfMaxButtons = Math.floor(maxPageButtons / 2);

  let startPage = Math.max(1, currentPage - halfMaxButtons);
  let endPage = Math.min(totalPages, currentPage + halfMaxButtons);

  if (endPage - startPage + 1 < maxPageButtons) {
    if (currentPage <= halfMaxButtons) {
      endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    } else if (currentPage + halfMaxButtons >= totalPages) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div>
          <LocationSlider />
        </div>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : searchResults.length === 0 ? (
          <p className="text-center font-bold">No hospitals found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
            {getPageData().map((hospital) => (
              <HospitalCard
                emojis={emojis}
                key={hospital.id}
                hospital={hospital}
              />
            ))}
          </div>
        )}
        <div className="py-8">

        <Pagination
           handlePrevPage={handlePrevPage}
           currentPage={currentPage}
           startPage={startPage}
           endPage={endPage}
           totalPages={totalPages}
           handleClick={handleClick}
           pageNumbers={pageNumbers}
           handleNextPage={handleNextPage} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HospitalsPage;
