import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/v1";

export const ApplicationCard = ({ applianceInfo }) => {
  return (
    <>
      <Card className="mt-6 w-[20rem] shadow-none">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {applianceInfo.theatreName}
          </Typography>
          <Typography>
            <p>Serial No: {applianceInfo.serialNo}</p>
            {/* <p>Location:</p>
            <ul>
              <li>City: {applianceInfo.location.city}</li>
              <li>State: {applianceInfo.location.state}</li>
              <li>Country: {applianceInfo.location.country}</li>
            </ul> */}
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

const ApplianceInfo = () => {
  const { applianceId } = useParams();
  const [applianceInfo, setApplianceInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}/appliance/${applianceId}/info`
      );
      setApplianceInfo(response.data);
    };

    fetchData();
  }, [applianceId]);

  // console.log("applianceInfo", applianceInfo);

  if (applianceInfo && !applianceInfo.error) {
    return (
      <>
        <div className="container mx-auto border-2 shadow-sm">
          <div className="flex justify-between p-5 items-start">
            <div className="">
              <h2 className="text-2xl font-bold mb-2">
                {applianceInfo.serialNo}
              </h2>
              <p className="text-sm font-semibold">
                {applianceInfo.theatreName}
              </p>
              <p className="my-1">
                {applianceInfo.location.city}, {applianceInfo.location.state},{" "}
                {applianceInfo.location.country}
              </p>
              <div className="flex gap-2">
                <Chip
                  variant="ghost"
                  value={applianceInfo.deviceStatus}
                  className="rounded-full"
                />
                <Chip
                  variant="ghost"
                  value={applianceInfo.storage}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded">
                Speedtest
              </button>
              <button className="bg-gray-300 text-black font-bold py-2 px-4 rounded">
                Logs
              </button>
            </div>
          </div>
          <hr className="w-auto h-2 border-gray-500" />

          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="me-2">
              <a
                href="/"
                aria-current="page"
                className="inline-block p-4 text-black bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              >
                Profile
              </a>
            </li>
            <li className="me-2">
              <a
                href="/"
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                Dashboard
              </a>
            </li>
            <li className="me-2">
              <a
                href="/"
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>

        <div className="container mx-auto border-2 shadow-sm">
          <div className="flex flex-wrap">
            {/* <Card className="w-full mx-auto">
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
            </Card> */}
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
            <ApplicationCard applianceInfo={applianceInfo} />
          </div>
        </div>
      </>
    );
  } else if (applianceInfo && applianceInfo.error) {
    return <p>Error: {applianceInfo.error}</p>; // Display error message
  }

  return <p>Loading...</p>; // Display loading message
};

export default ApplianceInfo;
