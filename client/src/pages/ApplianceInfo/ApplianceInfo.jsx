import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ApplianceInfo = () => {
  const { applianceId } = useParams();
  const [applianceInfo, setApplianceInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/appliance/${applianceId}/info`
      );
      setApplianceInfo(response.data);
    };

    fetchData();
  }, [applianceId]);

  // ... existing code for displaying appliance information
  if (applianceInfo && !applianceInfo.error) {
    return (
      <Card className="w-full mx-auto">
        <CardHeader>{applianceInfo.theatreName}</CardHeader>
        <CardBody>
          <p>Serial No: {applianceInfo.serialNo}</p>
          <p>Location:</p>
          <ul>
            <li>City: {applianceInfo.location.city}</li>
            <li>State: {applianceInfo.location.state}</li>
            <li>Country: {applianceInfo.location.country}</li>
          </ul>
        </CardBody>
      </Card>
    );
  } else if (applianceInfo && applianceInfo.error) {
    return <p>Error: {applianceInfo.error}</p>; // Display error message
  }

  return <p>Loading...</p>; // Display loading message
};

export default ApplianceInfo;
