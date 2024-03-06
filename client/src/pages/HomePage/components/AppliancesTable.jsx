import { Button, Card, Typography } from "@material-tailwind/react";
import React from "react";
import { ACCESSOR_TYPES } from "../utils";

function AppliancesTable({
  columns = [],
  data = [],
  paginationProps = {
    paginatedData: [],
    currentPage: 1,
    itemsPerPage: 10,
    handlePageChange: () => {},
  },
  additionalFormatProps = {},
}) {
  return (
    <React.Fragment>
      <Card className="h-full w-full rounded-sm overflow-scroll">
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
          </tbody>
        </table>
      </Card>

      {/* Pagination (implement based on your needs) */}
      <div className="flex justify-center mt-4">
        <Button
          onClick={() =>
            paginationProps?.handlePageChange(paginationProps?.currentPage - 1)
          }
          disabled={paginationProps?.currentPage === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            paginationProps?.handlePageChange(paginationProps?.currentPage + 1)
          }
          disabled={
            paginationProps?.currentPage ===
            Math.ceil(data.length / paginationProps?.itemsPerPage)
          }
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  );
}

export default AppliancesTable;
