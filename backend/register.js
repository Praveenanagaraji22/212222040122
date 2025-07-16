const axios = require('axios');
require('dotenv').config();

const register = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/register", {
      email: process.env.AUTH_EMAIL,
      name: process.env.AUTH_NAME,
      mobileNo: process.env.AUTH_MOBILE,
      githubUsername: process.env.AUTH_GITHUB,
      rollNo: process.env.AUTH_ROLL_NO,
      accessCode: process.env.AUTH_ACCESS_CODE
    });

    console.log("✅ Registered Successfully:");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Registration Failed:");
    console.error(error.response?.data || error.message);
  }
};

register();
