# Mock data
appliances = [
    {
        "serialNo": "JTD-512312",
        "theatreName": "Kriplle Square",
        "location": {
            "city": "New Delhi",
            "state": "Delhi",
            "country": "India"
        },
        "bandwidth": "1 Gbps",
        "avgBandwidth": "812 Kbps",
        "deviceStatus": "Offline",
        "downloadStatus": "Failed",
        "osVersion": "5.2.1.3"
    },
    {
        "serialNo": "JTD-987654",
        "theatreName": "Starlight Cinema",
        "location": {
            "city": "Mumbai",
            "state": "Maharashtra",
            "country": "India"
        },
        "bandwidth": "500 Mbps",
        "avgBandwidth": "400 Kbps",
        "deviceStatus": "Online",
        "downloadStatus": "Succeeded",
        "osVersion": "6.0.0"
    },
    {
        "serialNo": "JTD-123456",
        "theatreName": "Dreamland Theater",
        "location": {
            "city": "Bangalore",
            "state": "Karnataka",
            "country": "India"
        },
        "bandwidth": "750 Mbps",
        "avgBandwidth": "600 Kbps",
        "deviceStatus": "Online",
        "downloadStatus": "Downloading",
        "osVersion": "5.1.0"
    },
    {
        "serialNo": "JTD-789012",
        "theatreName": "Golden Palace Cinema",
        "location": {
            "city": "Chennai",
            "state": "Tamil Nadu",
            "country": "India"
        },
        "bandwidth": "2 Gbps",
        "avgBandwidth": "1.2 Mbps",
        "deviceStatus": "Offline",
        "downloadStatus": "Cancelled",
        "osVersion": "5.3.2"
    },
    {
        "serialNo": "JTD-345678",
        "theatreName": "Royal Cinemax",
        "location": {
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India"
        },
        "bandwidth": "1.5 Gbps",
        "avgBandwidth": "900 Kbps",
        "deviceStatus": "Online",
        "downloadStatus": "Succeeded",
        "osVersion": "6.2.1"
    },
    {
        "serialNo": "JTD-901234",
        "theatreName": "Regal Movies",
        "location": {
            "city": "Kolkata",
            "state": "West Bengal",
            "country": "India"
        },
        "bandwidth": "800 Mbps",
        "avgBandwidth": "700 Kbps",
        "deviceStatus": "Offline",
        "downloadStatus": "Failed",
        "osVersion": "5.0.0"
    },
    {
        "serialNo": "JTD-234567",
        "theatreName": "Cineplex Deluxe",
        "location": {
            "city": "Pune",
            "state": "Maharashtra",
            "country": "India"
        },
        "bandwidth": "1.2 Gbps",
        "avgBandwidth": "850 Kbps",
        "deviceStatus": "Online",
        "downloadStatus": "Downloading",
        "osVersion": "5.2.0"
    },
    {
        "serialNo": "JTD-890123",
        "theatreName": "Silver Screen Multiplex",
        "location": {
            "city": "Ahmedabad",
            "state": "Gujarat",
            "country": "India"
        },
        "bandwidth": "600 Mbps",
        "avgBandwidth": "500 Kbps",
        "deviceStatus": "Offline",
        "downloadStatus": "Cancelled",
        "osVersion": "5.3.1"
    },
    {
        "serialNo": "JTD-456789",
        "theatreName": "PVR Cinemas",
        "location": {
            "city": "Jaipur",
            "state": "Rajasthan",
            "country": "India"
        },
        "bandwidth": "1.8 Gbps",
        "avgBandwidth": "1 Mbps",
        "deviceStatus": "Online",
        "downloadStatus": "Succeeded",
        "osVersion": "6.1.0"
    },
    {
        "serialNo": "JTD-345633",
        "theatreName": "Majestic Movies",
        "location": {
            "city": "Lucknow",
            "state": "Uttar Pradesh",
            "country": "India"
        },
        "bandwidth": "950 Mbps",
        "avgBandwidth": "750 Kbps",
        "deviceStatus": "Offline",
        "downloadStatus": "Failed",
        "osVersion": "5.4.0"
    },
    {
        "serialNo": "JTD-567890",
        "theatreName": "Sunshine Cinemas",
        "location": {
            "city": "Chandigarh",
            "state": "Punjab",
            "country": "India"
        },
        "bandwidth": "700 Mbps",
        "avgBandwidth": "550 Kbps",
        "deviceStatus": "Online",
        "downloadStatus": "Downloading",
        "osVersion": "6.0.1"
    },
    {
        "serialNo": "JTD-678901",
        "theatreName": "Vista Cinemas",
        "location": {
            "city": "Bhopal",
            "state": "Madhya Pradesh",
            "country": "India"
        },
        "bandwidth": "850 Mbps",
        "avgBandwidth": "650 Kbps",
        "deviceStatus": "Offline",
        "downloadStatus": "Cancelled",
        "osVersion": "5.5.0"
    },
    {
        "serialNo": "JTD-789012",
        "theatreName": "Cinepolis",
        "location": {
            "city": "Nagpur",
            "state": "Maharashtra",
            "country": "India"
        },
        "bandwidth": "1.5 Gbps",
        "avgBandwidth": "1.1 Mbps",
        "deviceStatus": "Online",
        "downloadStatus": "Succeeded",
        "osVersion": "6.2.2"
    },
    {
        "serialNo": "JTD-890123",
        "theatreName": "Inox Movies",
        "location": {
            "city": "Visakhapatnam",
            "state": "Andhra Pradesh",
            "country": "India"
        },
        "bandwidth": "950 Mbps",
        "avgBandwidth": "800 Kbps",
        "deviceStatus": "Offline",
        "downloadStatus": "Failed",
        "osVersion": "5.3.3"
    },
    {
        "serialNo": "JTD-901234",
        "theatreName": "Prasad's IMAX",
        "location": {
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India"
        },
        "bandwidth": "2 Gbps",
        "avgBandwidth": "1.5 Mbps",
        "deviceStatus": "Online",
        "downloadStatus": "Downloading",
        "osVersion": "6.1.1"
    }
]

# Mock data for appliance_info
appliance_info = {
    "JTD-512312": {
        "serialNo": "JTD-512312",
        "theatreName": "Kriplle Square",
        "location": {
            "city": "New Delhi",
            "state": "Delhi",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "1 Gbps",
        "avgBandwidth": "812 Kbps",
        "planStartDate": "2023-10-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Offline",
        "downloadStatus": "Failed",
        "osVersion": "5.2.1.3",
        "storage": "828 GB"
    },
    "JTD-987654": {
        "serialNo": "JTD-987654",
        "theatreName": "Starlight Cinema",
        "location": {
            "city": "Mumbai",
            "state": "Maharashtra",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "500 Mbps",
        "avgBandwidth": "400 Kbps",
        "planStartDate": "2023-09-15T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Online",
        "downloadStatus": "Succeeded",
        "osVersion": "6.0.0",
        "storage": "1 TB"
    },
    "JTD-123456": {
        "serialNo": "JTD-123456",
        "theatreName": "Dreamland Theater",
        "location": {
            "city": "Bangalore",
            "state": "Karnataka",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "750 Mbps",
        "avgBandwidth": "600 Kbps",
        "planStartDate": "2023-11-01T10:00:00Z",
        "billingCycle": "Quarterly",
        "deviceStatus": "Online",
        "downloadStatus": "Downloading",
        "osVersion": "5.1.0",
        "storage": "500 GB"
    },
    "JTD-789012": {
        "serialNo": "JTD-789012",
        "theatreName": "Golden Palace Cinema",
        "location": {
            "city": "Chennai",
            "state": "Tamil Nadu",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "2 Gbps",
        "avgBandwidth": "1.2 Mbps",
        "planStartDate": "2023-08-01T10:00:00Z",
        "billingCycle": "Annual",
        "deviceStatus": "Offline",
        "downloadStatus": "Cancelled",
        "osVersion": "5.3.2",
        "storage": "2 TB"
    },
    "JTD-345678": {
        "serialNo": "JTD-345678",
        "theatreName": "Royal Cinemax",
        "location": {
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "1.5 Gbps",
        "avgBandwidth": "900 Kbps",
        "planStartDate": "2023-07-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Online",
        "downloadStatus": "Succeeded",
        "osVersion": "6.2.1",
        "storage": "1.5 TB"
    },
    "JTD-901234": {
        "serialNo": "JTD-901234",
        "theatreName": "Regal Movies",
        "location": {
            "city": "Kolkata",
            "state": "West Bengal",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "800 Mbps",
        "avgBandwidth": "700 Kbps",
        "planStartDate": "2023-06-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Offline",
        "downloadStatus": "Failed",
        "osVersion": "5.0.0",
        "storage": "1.2 TB"
    },
    "JTD-234567": {
        "serialNo": "JTD-234567",
        "theatreName": "Cineplex Deluxe",
        "location": {
            "city": "Pune",
            "state": "Maharashtra",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "1.2 Gbps",
        "avgBandwidth": "850 Kbps",
        "planStartDate": "2023-05-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Online",
        "downloadStatus": "Downloading",
        "osVersion": "5.2.0",
        "storage": "1.2 TB"
    },
    "JTD-890123": {
        "serialNo": "JTD-890123",
        "theatreName": "Silver Screen Multiplex",
        "location": {
            "city": "Ahmedabad",
            "state": "Gujarat",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "600 Mbps",
        "avgBandwidth": "500 Kbps",
        "planStartDate": "2023-04-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Offline",
        "downloadStatus": "Cancelled",
        "osVersion": "5.3.1",
        "storage": "800 GB"
    },
    "JTD-456789": {
        "serialNo": "JTD-456789",
        "theatreName": "PVR Cinemas",
        "location": {
            "city": "Jaipur",
            "state": "Rajasthan",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "1.8 Gbps",
        "avgBandwidth": "1 Mbps",
        "planStartDate": "2023-03-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Online",
        "downloadStatus": "Succeeded",
        "osVersion": "6.1.0",
        "storage": "1.5 TB"
    },
    "JTD-345633": {
        "serialNo": "JTD-345633",
        "theatreName": "Majestic Movies",
        "location": {
            "city": "Lucknow",
            "state": "Uttar Pradesh",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "950 Mbps",
        "avgBandwidth": "750 Kbps",
        "planStartDate": "2023-02-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Offline",
        "downloadStatus": "Failed",
        "osVersion": "5.4.0",
        "storage": "1 TB"
    },
    "JTD-567890": {
        "serialNo": "JTD-567890",
        "theatreName": "Sunshine Cinemas",
        "location": {
            "city": "Chandigarh",
            "state": "Punjab",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "700 Mbps",
        "avgBandwidth": "550 Kbps",
        "planStartDate": "2023-01-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Online",
        "downloadStatus": "Downloading",
        "osVersion": "6.0.1",
        "storage": "600 GB"
    },
    "JTD-678901": {
        "serialNo": "JTD-678901",
        "theatreName": "Vista Cinemas",
        "location": {
            "city": "Bhopal",
            "state": "Madhya Pradesh",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "850 Mbps",
        "avgBandwidth": "650 Kbps",
        "planStartDate": "2022-12-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Offline",
        "downloadStatus": "Cancelled",
        "osVersion": "5.5.0",
        "storage": "1 TB"
    },
    "JTD-789012": {
        "serialNo": "JTD-789012",
        "theatreName": "Cinepolis",
        "location": {
            "city": "Nagpur",
            "state": "Maharashtra",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "1.5 Gbps",
        "avgBandwidth": "1.1 Mbps",
        "planStartDate": "2022-11-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Online",
        "downloadStatus": "Succeeded",
        "osVersion": "6.2.2",
        "storage": "1 TB"
    },
    "JTD-890123": {
        "serialNo": "JTD-890123",
        "theatreName": "Inox Movies",
        "location": {
            "city": "Visakhapatnam",
            "state": "Andhra Pradesh",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "950 Mbps",
        "avgBandwidth": "800 Kbps",
        "planStartDate": "2022-10-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Offline",
        "downloadStatus": "Failed",
        "osVersion": "5.3.3",
        "storage": "2 TB"
    },
    "JTD-901234": {
        "serialNo": "JTD-901234",
        "theatreName": "Prasad's IMAX",
        "location": {
            "city": "Hyderabad",
            "state": "Telangana",
            "country": "India"
        },
        "ispPaymentResponsibility": "Qube",
        "bandwidth": "2 Gbps",
        "avgBandwidth": "1.5 Mbps",
        "planStartDate": "2022-09-01T10:00:00Z",
        "billingCycle": "Monthly",
        "deviceStatus": "Online",
        "downloadStatus": "Downloading",
        "osVersion": "6.1.1",
        "storage": "1.8 TB"
    }
}
