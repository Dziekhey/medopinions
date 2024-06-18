import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = ({
  handlePrevPage,
  currentPage,
  startPage,
  endPage,
  totalPages,
  handleClick,
  pageNumbers,
  handleNextPage,
}) => {

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="mx-1 px-2 py-1 border rounded-lg bg-[#f7f7f7] text-black"
      >
        <ArrowBackIosIcon />
      </button>
      {startPage > 1 && (
        <>
          <button
            onClick={() => handleClick(1)}
            className="mx-1 px-3 py-1 border rounded-lg"
            style={
              currentPage === 1
                ? { backgroundColor: '#f7f7f7', color: '#0A73B0' }
                : { backgroundColor: "#f7f7f7", color: "black" }
            }
          >
            1
          </button>
          {startPage > 2 && <span className="mx-1">...</span>}
        </>
      )}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleClick(pageNumber)}
          className="mx-1 px-3 py-1 border rounded-lg"
          style={
            currentPage === pageNumber
              ? { backgroundColor: "#f7f7f7", color: '#0A73B0' }
              : { backgroundColor: "#f7f7f7", color: "black" }
          }
        >
          {pageNumber}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="mx-1">...</span>}
          <button
            onClick={() => handleClick(totalPages)}
            className="mx-1 px-3 py-1 border rounded-lg"
            style={
              currentPage === totalPages
                ? { backgroundColor: "#f7f7f7", color: '#0A73B0' }
                : { backgroundColor: "#f7f7f7", color: "black" }
            }
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="mx-1 px-2 py-1 border rounded-lg bg-[#f7f7f7] text-black"
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Pagination;
