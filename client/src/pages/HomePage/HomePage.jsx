import React, { useState } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import { ACCESSOR_TYPES, APPLIANCE_TABLE_COLUMNS } from "./utils";

function HomePage({ appliances }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewClick = (applianceId) => {
    navigate(`/appliance/${applianceId}/info`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const paginatedAppliances = appliances?.slice(startIndex, endIndex);

  const additionalFormatProps = {
    onClick: handleViewClick,
  };

  return (
    <div className="p-4">
      <Card className="h-full w-full overflow-scroll">
        <table
          className="w-full min-w-max table-auto text-left"
          style={{ height: "18rem", overflow: "auto" }}
        >
          <thead>
            <tr>
              {APPLIANCE_TABLE_COLUMNS.map((colObj) => (
                <th
                  key={colObj.headerId}
                  className="sticky border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {colObj.header}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedAppliances?.map((rowData, index) => {
              const isLast = index === paginatedAppliances.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  {APPLIANCE_TABLE_COLUMNS.map((colObj) => (
                    <td
                      key={`${rowData.serialNo}_${colObj.header}_${index}`}
                      className={classes}
                    >
                      {[
                        ACCESSOR_TYPES.COMPOSITE,
                        ACCESSOR_TYPES.ELEMENT,
                      ].includes(colObj.additionalConfig?.accessorType) &&
                      colObj.formatCell &&
                      typeof colObj.formatCell === "function"
                        ? colObj.formatCell({
                            rowData,
                            ...additionalFormatProps,
                          })
                        : rowData[colObj.accessor]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* Pagination (implement based on your needs) */}
      <div className="flex justify-center mt-4">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(appliances.length / itemsPerPage)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
