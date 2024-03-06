import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { APPLIANCE_TABLE_COLUMNS } from "./utils";
import DownloadStatuses from "./components/DownloadStatuses";
import AppliancesTable from "./components/AppliancesTable";

function HomePage({ appliances = [], metadata = {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewClick = (applianceId) => {
    navigate(`/appliances/${applianceId}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const paginatedAppliances = appliances?.slice(startIndex, endIndex);

  const additionalFormatProps = {
    onClick: handleViewClick,
  };

  const paginationProps = {
    paginatedData: paginatedAppliances,
    currentPage: 1,
    itemsPerPage: 10,
    handlePageChange,
  };

  return (
    <div className="flex-col space-y-4 p-4 h-[33rem] w-full">
      <DownloadStatuses downloadStatuses={metadata?.download_status_counts} />
      <AppliancesTable
        columns={APPLIANCE_TABLE_COLUMNS}
        data={[]}
        additionalFormatProps={additionalFormatProps}
        paginationProps={paginationProps}
      />
    </div>
  );
}

export default HomePage;
