import React from "react";
import { Card, Typography } from "@material-tailwind/react";

//* Import components/utils
import { ACCESSOR_TYPES } from "../utils";
import Pagination from "./Pagination";

function AppliancesTable({
  columns = [],
  // data = [],
  isPaginationEnabled = false,
  paginationProps = {
    paginatedData: [],
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: null,
    handlePageChange: () => {},
    handleItemsPerPageChange: () => {},
  },
  additionalFormatProps = {},
  searchValue = "",
  filterValue = "All",
  onFilterChange = () => {},
  onSearchChange = () => {},
}) {
  return (
    <React.Fragment>
      <Card className="h-full w-full rounded-md overflow-scroll">
        <div className="w-full flex justify-between p-3">
          {/* Search bar */}
          <section className="w-[50%] flex">
            <div className="flex w-[80%]">
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={onSearchChange}
                className="w-full border px-3 py-1 rounded mr-4"
              />
            </div>

            {/* Filter dropdown */}
            <div className="flex">
              <select
                value={filterValue}
                onChange={onFilterChange}
                className="border px-3 py-1 rounded"
              >
                <option value="All">All</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
          </section>

          {/* Pagination (implement based on your needs) */}
          {isPaginationEnabled ? (
            <Pagination paginationProps={paginationProps} />
          ) : null}
        </div>

        {/* Table */}
        <div className="w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="sticky top-0 bg-blue-gray-50 z-10">
              <tr className="bg-blue-gray-50">
                {columns?.map((colObj) => (
                  <th
                    key={colObj?.headerId}
                    className="sticky border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {colObj?.header}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Table row */}
              {isPaginationEnabled ? (
                <React.Fragment>
                  {paginationProps?.paginatedData?.length === 0 && (
                    <tr>
                      <td colSpan={columns?.length} className="p-4 text-center">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          No data
                        </Typography>
                      </td>
                    </tr>
                  )}
                  {paginationProps?.paginatedData?.map((rowData, index) => {
                    const isLast =
                      index === paginationProps?.paginatedData?.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        {columns.map((colObj) => (
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
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {paginationProps?.paginatedData?.length === 0 && (
                    <tr>
                      <td colSpan={columns?.length} className="p-4 text-center">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          No data
                        </Typography>
                      </td>
                    </tr>
                  )}
                  {paginationProps?.paginatedData?.map((rowData, index) => {
                    const isLast =
                      index === paginationProps?.paginatedData?.length - 1;
                    const classes = isLast
                      ? "p-4 border-b "
                      : "p-4 border-blue-gray-50";

                    return (
                      <tr key={index}>
                        {columns.map((colObj) => (
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
                </React.Fragment>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default AppliancesTable;
