import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useParams } from "react-router-dom";

//* Import components/utils
import Chip from "../../components/Chip/Chip";
import { chipValueToVariantMapping } from "../../utils/constants";
import { APPLIANCE_DETAILS_CARDS_CONFIG } from "./utils";

const BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/v1";

export const DetailsCard = ({ label = "", value = "" }) => {
  return (
    <React.Fragment>
      <Card className="w-[20rem] shadow-none">
        <CardBody>
          <Typography variant="body2" color="blue-gray" className="mb-1">
            {label}
          </Typography>
          <Typography className="text-xs">
            <p>{value}</p>
          </Typography>
        </CardBody>
      </Card>
    </React.Fragment>
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
      <React.Fragment>
        <Card className="mx-auto border-2 shadow-sm rounded-none">
          <div className="flex justify-between p-5 items-start">
            <div className="">
              <h2 className="text-3xl mb-3">{applianceInfo.serialNo}</h2>
              <p className="text-md">{applianceInfo.theatreName}</p>
              <p className="text-sm my-1">
                {applianceInfo.location.city}, {applianceInfo.location.state},{" "}
                {applianceInfo.location.country}
              </p>
              <div className="flex gap-2">
                <Chip
                  type={chipValueToVariantMapping[applianceInfo.deviceStatus]}
                  variant="ghost"
                  label={applianceInfo.deviceStatus}
                  className="rounded-xl"
                  showIcon
                />
                <Chip
                  type="light"
                  label={applianceInfo.storage}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              <button className="bg-gray-300 font-bold py-2 px-4 rounded-md">
                Speedtest
              </button>
              <button className="bg-gray-300 font-bold py-2 px-4 rounded-md">
                Logs
              </button>
            </div>
          </div>
          <hr className="w-auto h-2 border-gray-500" />

          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="me-2">
              <a
                href="#"
                aria-current="page"
                className="inline-block p-4 text-black bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              >
                Details
              </a>
            </li>
            <li className="me-2">
              <a
                href="/"
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                Content
              </a>
            </li>
            <li className="me-2">
              <a
                href="/"
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                Bandwidth
              </a>
            </li>
          </ul>
        </Card>

        <Card className="mx-4 border-2 shadow-sm mt-4">
          <div className="flex flex-wrap">
            {APPLIANCE_DETAILS_CARDS_CONFIG.map((card) => (
              <DetailsCard
                key={card.title}
                label={card.title}
                value={
                  card.formatValue && typeof card.formatValue === "function"
                    ? card.formatValue(applianceInfo[card.key])
                    : applianceInfo[card.key]
                }
              />
            ))}
          </div>
        </Card>
      </React.Fragment>
    );
  } else if (applianceInfo && applianceInfo.error) {
    return <p>Error: {applianceInfo.error}</p>; // Display error message
  }

  return <p>Loading...</p>; // Display loading message
};

export default ApplianceInfo;
