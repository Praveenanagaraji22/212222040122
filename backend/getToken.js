const axios = require("axios");
require("dotenv").config();

const getAccessToken = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/auth", {
      email: process.env.AUTH_EMAIL,
      name: process.env.AUTH_NAME,
      rollNo: process.env.AUTH_ROLL_NO,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      accessCode: process.env.AUTH_ACCESS_CODE
    });

   
    console.log("ACCESS_TOKEN =", response.data.access_token); 
  } catch (err) {
    
    console.error(err.response?.data || err.message);
  }
};

getAccessToken();
