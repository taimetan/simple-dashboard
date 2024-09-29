"use client";

import { useState, useEffect } from "react";
import { fetchData } from "@/lib/data";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import UserTable from "@/components/UserTable";
import Pagination from "@/components/Pagination";

const DashboardUI = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    getData();
  }, []);

  const totalRows = data.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="p-6">
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      <UserTable currentData={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleFirstPage={handleFirstPage}
        handleLastPage={handleLastPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalRows={totalRows}
        startIndex={startIndex}
      />
    </div>
  );
};

export default DashboardUI;
