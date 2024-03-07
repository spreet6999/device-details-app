import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <Link to="/">
        <Button ripple="light">Go Back to Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
