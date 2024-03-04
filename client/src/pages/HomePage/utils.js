export const APPLIANCE_TABLE_COLUMNS = [
  {
    header: "Device Serial",
    accessor: "serialNo",
    headerId: 1,
    formatCell: () => {},
  },
  {
    header: "Location",
    accessor: "location",
    headerId: 2,
    formatCell: () => {},
    // additionalConfig: {
    //     accessorType: "COMPOSITE" //* combination of one or more
    // }
  },
  {
    header: "Bandwidth",
    accessor: "bandwidth",
    headerId: 3,
    formatCell: () => {},
    // additionalConfig: {

    // }
  },
  {
    header: "Status",
    accessor: "deviceStatus",
    headerId: 4,
    formatCell: () => {},
    // additionalConfig: {

    // }
  },
  {
    header: "Download Status",
    accessor: "downloadStatus",
    headerId: 5,
    formatCell: () => {},
    // additionalConfig: {

    // }
  },
  {
    header: "OS Version",
    accessor: "osVersion",
    headerId: 6,
    formatCell: () => {},
    // additionalConfig: {

    // }
  },
  {
    header: "",
    accessor: "",
    headerId: 7,
    formatCell: () => {},
    // additionalConfig: {

    // }
  },
];
