import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ApplianceInfo from "../pages/ApplianceInfo/ApplianceInfo";
import HomePage from "../pages/HomePage/HomePage";
import axios from "axios";

function AppRoutes() {
  const [appliances, setAppliances] = useState([]);
  const [metadata, setMetadata] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/v1/appliances"
      );
      setAppliances(response.data.appliances);
      setMetadata(response.data.metadata);
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage appliances={appliances} metadata={metadata} />}
      />
      <Route
        path="/appliances"
        element={<HomePage appliances={appliances} metadata={metadata} />}
      />
      <Route path="/appliances/:applianceId" element={<ApplianceInfo />} />
    </Routes>
  );
}

export default AppRoutes;
