import React from "react";
import { Navbar as MaterialNavbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function Navbar() {
  return (
    <MaterialNavbar className="sticky mx-auto rounded-none max-w-screen-4xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="mx-auto flex rounded-none items-center text-blue-gray-900">
        <Typography className="mr-4 cursor-pointer py-1.5 text-3xl font-medium">
          <Link to="/">Devices</Link>
        </Typography>
        <Breadcrumbs />
      </div>
    </MaterialNavbar>
  );
}
