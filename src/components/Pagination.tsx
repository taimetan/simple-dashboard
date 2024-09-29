const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
  handleFirstPage,
  handleLastPage,
  rowsPerPage,
  setRowsPerPage,
  totalRows,
  startIndex,
}: any) => (
  <div className="flex flex-col md:flex-row justify-between items-center mt-4">
    <div className="mb-2 md:mb-0">
      <span className="text-gray-600">
        {startIndex + 1} - {Math.min(startIndex + rowsPerPage, totalRows)} of{" "}
        {totalRows} row(s) selected.
      </span>
    </div>
    <div className="flex items-center">
      <span className="mr-2 hidden md:block">Rows per page:</span>
      <select
        value={rowsPerPage}
        onChange={(e) => {
          setRowsPerPage(Number(e.target.value));
        }}
        className="border border-gray-300 rounded p-1"
      >
        {[10, 20, 30, 50].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
    <div className="flex items-center mt-2 md:mt-0">
      <button
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        className={`mr-2 p-2 rounded ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-white border border-gray-300 hover:bg-gray-100"
        }`}
      >
        &lt;&lt; {/* Go to First Page */}
      </button>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`mr-2 p-2 rounded ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-white border border-gray-300 hover:bg-gray-100"
        }`}
      >
        &lt; {/* Go to Previous Page */}
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`mx-2 p-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-white border border-gray-300 hover:bg-gray-100"
        }`}
      >
        &gt; {/* Go to Next Page */}
      </button>
      <button
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        className={`mx-2 p-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-white border border-gray-300 hover:bg-gray-100"
        }`}
      >
        &gt;&gt; {/* Go to Last Page */}
      </button>
    </div>
  </div>
);

export default Pagination;
