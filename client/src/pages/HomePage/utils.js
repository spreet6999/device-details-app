import { Button } from "@material-tailwind/react";
import CompositeTableCell from "./components/CompositeTableCell";
import Chip from "../../components/Chip/Chip";
import { chipValueToVariantMapping } from "../../utils/constants";

export const ACCESSOR_TYPES = {
  COMPOSITE: "COMPOSITE",
  SINGLE: "SINGLE",
  ELEMENT: "ELEMENT",
};

export const APPLIANCE_TABLE_COLUMNS = [
  {
    header: "Device Serial",
    accessor: "serialNo",
    headerId: 1,
    // formatCell: () => {},
  },
  {
    header: "Location",
    accessor: "theatreName__location",
    headerId: 2,
    formatCell: function ({ rowData = {} }) {
      const accessors = this.accessor.split("__").map((item, index) => {
        return {
          key: item,
          id: `${item}__${index}`,
          styles: index > 0 ? { color: "#616161" } : {},
        };
      });
      return (
        <CompositeTableCell
          data={rowData}
          accessors={accessors}
          containerStyles={{}}
        />
      );
    },
    additionalConfig: {
      accessorType: ACCESSOR_TYPES.COMPOSITE, //* combination of one or more
    },
  },
  {
    header: "Bandwidth",
    accessor: "bandwidth__avgBandwidth",
    headerId: 3,
    formatCell: function ({ rowData = {} }) {
      const accessors = this.accessor.split("__").map((item, index) => {
        return {
          key: item,
          id: `${item}__${index}`,
          styles: index > 0 ? { color: "#616161" } : {},
        };
      });
      return (
        <CompositeTableCell
          data={rowData}
          accessors={accessors}
          containerStyles={{}}
        />
      );
    },
    additionalConfig: {
      accessorType: ACCESSOR_TYPES.COMPOSITE, //* combination of one or more
    },
  },
  {
    header: "Status",
    accessor: "deviceStatus",
    headerId: 4,
    formatCell: function ({ rowData = {} }) {
      return (
        <Chip
          variant={chipValueToVariantMapping[rowData?.deviceStatus]}
          label={rowData?.deviceStatus}
        />
      );
    },
    additionalConfig: {
      accessorType: ACCESSOR_TYPES.ELEMENT,
    },
  },
  {
    header: "Download Status",
    accessor: "downloadStatus",
    headerId: 5,
    formatCell: function ({ rowData = {} }) {
      return (
        <Chip
          variant={chipValueToVariantMapping[rowData?.downloadStatus]}
          label={rowData?.downloadStatus}
        />
      );
    },
    additionalConfig: {
      accessorType: ACCESSOR_TYPES.ELEMENT,
    },
  },
  {
    header: "OS Version",
    accessor: "osVersion",
    headerId: 6,
    // formatCell: () => {},
    // additionalConfig: {

    // }
  },
  {
    header: "",
    accessor: "",
    headerId: 7,
    formatCell: ({ rowData = {}, onClick = () => {} }) => {
      return (
        <Button onClick={() => onClick(rowData?.serialNo)} size="sm">
          View
        </Button>
      );
    },
    additionalConfig: {
      accessorType: ACCESSOR_TYPES.ELEMENT,
    },
  },
];
