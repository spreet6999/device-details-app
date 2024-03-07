import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ApplianceInfo from "../pages/ApplianceInfo/ApplianceInfo";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFound/NotFound.jsx"; // Import your Page Not Found component
import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/v1";

function AppRoutes() {
  const [appliances, setAppliances] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/appliances`);
        setAppliances(response.data.appliances);
        setMetadata(response.data.metadata);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
