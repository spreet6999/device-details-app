import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { APPLIANCE_TABLE_COLUMNS } from "./utils";
import DownloadStatuses from "./components/DownloadStatuses";
import AppliancesTable from "./components/AppliancesTable";
import { filterDataBasedOnSearch } from "./components/utils";

function HomePage({ appliances = [], metadata = {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleViewClick = (applianceId) => {
    navigate(`/appliances/${applianceId}`);
  };

  const filteredData = appliances?.filter((item) => {
    // Filter based on device status (Online or Offline)
    if (filter === "Online") {
      return item.deviceStatus === "Online";
    } else if (filter === "Offline") {
      return item.deviceStatus === "Offline";
    }
    // If filter is "All", return all data
    return true;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredAndSearchedData = filterDataBasedOnSearch(
    filteredData,
    searchTerm
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const paginatedAppliances = filteredAndSearchedData?.slice(
    startIndex,
    endIndex
  );
  const totalPages = Math.ceil(filteredAndSearchedData.length / itemsPerPage);

  const additionalFormatProps = {
    onClick: handleViewClick,
  };

  const paginationProps = {
    paginatedData: paginatedAppliances,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    totalPages: totalPages,
    handleItemsPerPageChange,
    handlePageChange,
  };

  return (
    <div className="flex-col space-y-4 p-4 h-[calc(100vh-13rem)] w-full">
      <DownloadStatuses downloadStatuses={metadata?.download_status_counts} />
      <AppliancesTable
        columns={APPLIANCE_TABLE_COLUMNS}
        // data={filteredAndSearchedData}
        additionalFormatProps={additionalFormatProps}
        paginationProps={paginationProps}
        isPaginationEnabled={true}
        filterValue={filter}
        searchValue={searchTerm}
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default HomePage;
