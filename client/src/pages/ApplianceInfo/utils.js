export const APPLIANCE_DETAILS_CARDS_CONFIG = [
  {
    id: 1,
    title: "Device Serial",
    key: "serialNo",
  },
  {
    id: 2,
    title: "Location",
    key: "theatreName",
  },
  {
    id: 3,
    title: "City",
    key: "location",
    formatValue: function (data) {
      return `${data.city}, ${data.state}, ${data.country}`;
    },
  },
  {
    id: 4,
    title: "ISP Payment Responsibility",
    key: "ispPaymentResponsibility",
  },
  {
    id: 5,
    title: "Bandwidth",
    key: "bandwidth",
  },
  {
    id: 6,
    title: "Average Bandwidth",
    key: "avgBandwidth",
  },
  {
    id: 7,
    title: "Plan Start Date",
    key: "planStartDate",
    formatValue: function (data) {
      return new Date(data).toLocaleDateString();
    },
  },
  {
    id: 8,
    title: "Billing Cycle",
    key: "billingCycle",
  },
  {
    id: 9,
    title: "Download Status",
    key: "downloadStatus",
  },
  {
    id: 10,
    title: "OS Version",
    key: "osVersion",
  },
  {
    id: 11,
    title: "Storage Available",
    key: "storage",
  },
];
