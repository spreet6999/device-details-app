import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ApplianceInfo from "../pages/ApplianceInfo/ApplianceInfo";
import HomePage from "../pages/HomePage/HomePage";
import axios from "axios";

function AppRoutes() {
  const [appliances, setAppliances] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/v1/appliances"
      );
      setAppliances(response.data.appliances);
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage appliances={appliances} />} />
      <Route path="/appliance/:applianceId/info" element={<ApplianceInfo />} />
    </Routes>
  );
}

export default AppRoutes;
