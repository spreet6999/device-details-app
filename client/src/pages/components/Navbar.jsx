import React from "react";
import { Navbar as MaterialNavbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <MaterialNavbar className="sticky mx-auto rounded-none max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex rounded-none items-center justify-between text-blue-gray-900">
        <Typography className="mr-4 cursor-pointer py-1.5 text-3xl font-medium">
          <Link to="/">Devices</Link>
        </Typography>
      </div>
    </MaterialNavbar>
  );
}
