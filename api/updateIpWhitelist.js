require('dotenv').config();
const axios = require('axios');

// MongoDB Atlas API credentials from environment variables
const API_KEY = process.env.MONGO_API_KEY;
const GROUP_ID = process.env.MONGO_GROUP_ID;  // Project ID

// Function to get the current public IP address
const getCurrentIp = async () => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
  } catch (error) {
    console.error('Error getting current IP:', error);
    process.exit(1);
  }
};

// Function to add the current IP address to MongoDB Atlas whitelist
const addIpToWhitelist = async (ip) => {
  const url = `https://cloud.mongodb.com/api/atlas/v1.0/groups/${GROUP_ID}/accessList`;
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  };
  const data = [
    {
      'ipAddress': ip,
      'comment': 'Added by automated script'
    }
  ];

  try {
    const response = await axios.post(url, data, { headers });
    if (response.status === 201) {
      console.log(`Successfully added IP ${ip} to whitelist`);
    } else {
      console.error('Failed to add IP to whitelist:', response.data);
    }
  } catch (error) {
    console.error('Error adding IP to whitelist:', error);
  }
};

// Main function
const main = async () => {
  const currentIp = await getCurrentIp();
  await addIpToWhitelist(currentIp);
};

main();
