import React from "react";
import { Card } from "@material-tailwind/react";

import Chip from "../../../components/Chip/Chip";
import { chipValueToVariantMapping } from "../../../utils/constants";

function DownloadStatuses({ downloadStatuses = {} }) {
  return (
    <Card className="flex-row gap-2 flex-wrap w-full rounded-md p-3">
      {Object.entries(downloadStatuses).map((downloadStatusPair) => (
        <Chip
          key={downloadStatusPair[0]}
          className="flex-1"
          variant={chipValueToVariantMapping[downloadStatusPair[0]]}
          label={`${downloadStatusPair[1]} ${downloadStatusPair[0]}`}
        />
      ))}
    </Card>
  );
}

export default DownloadStatuses;
