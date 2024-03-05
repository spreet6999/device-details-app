import { Typography } from "@material-tailwind/react";
import React from "react";

function CompositeTableCell({
  data = {},
  accessors = [{ key: "", id: 1, styles: {} }],
  containerStyles = {},
}) {
  return (
    <div style={{ ...containerStyles }}>
      {accessors?.map((accessor) => (
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal text-xs"
          style={{ ...accessor?.styles }}
        >
          {Object.prototype.toString.call(data[accessor?.key]) ===
          "[object Object]"
            ? Object.entries(data[accessor?.key]).reduce((acc, curr, index) => {
                if (index === 0) acc = acc + curr[1];
                else acc = acc + ", " + curr[1];
                return acc;
              }, "")
            : data[accessor?.key]}
        </Typography>
      ))}
    </div>
  );
}

export default CompositeTableCell;
