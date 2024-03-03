import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@material-tailwind/react";

function HomePage({ appliances }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewClick = (applianceId) => {
    window.location.href = `/appliance/${applianceId}/info`;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const paginatedAppliances = appliances.slice(startIndex, endIndex);

  return <></>;

  // return (
  //   <div className="container mx-auto px-4">
  //     <Table className="w-full">
  //       <Thead>
  //         <Tr>
  //           <Th>Serial No</Th>
  //           <Th>Theatre Name</Th>
  //           <Th>Location</Th>
  //           <Th>Bandwidth</Th>
  //           <Th>Avg Bandwidth</Th>
  //           <Th>Device Status</Th>
  //           <Th>Download Status</Th>
  //           <Th>OS Version</Th>
  //           <Th>Actions</Th>
  //         </Tr>
  //       </Thead>
  //       <Tbody>
  //         {paginatedAppliances.map((appliance) => (
  //           <Tr key={appliance.serialNo}>
  //             <Td>{appliance.serialNo}</Td>
  //             <Td>{appliance.theatreName}</Td>
  //             <Td>
  //               {appliance.location.city}, {appliance.location.state},{" "}
  //               {appliance.location.country}
  //             </Td>
  //             <Td>{appliance.bandwidth}</Td>
  //             <Td>{appliance.avgBandwidth}</Td>
  //             <Td>{appliance.deviceStatus}</Td>
  //             <Td>{appliance.downloadStatus}</Td>
  //             <Td>{appliance.osVersion}</Td>
  //             <Td>
  //               <Button
  //                 onClick={() => handleViewClick(appliance.serialNo)}
  //                 color="blue"
  //                 size="sm"
  //               >
  //                 View
  //               </Button>
  //             </Td>
  //           </Tr>
  //         ))}
  //       </Tbody>
  //     </Table>
  //     {/* Pagination (implement based on your needs) */}
  //     <div className="flex justify-center mt-4">
  //       <button
  //         onClick={() => handlePageChange(currentPage - 1)}
  //         disabled={currentPage === 1}
  //       >
  //         Previous
  //       </button>
  //       <button
  //         onClick={() => handlePageChange(currentPage + 1)}
  //         disabled={currentPage === Math.ceil(appliances.length / itemsPerPage)}
  //       >
  //         Next
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default HomePage;
