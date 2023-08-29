const axios = require('axios');
require("dotenv/config");

// get data
exports.get_data_by_coordinates = async (url, lat, lon) =>{
      const key = process.env.KEY
      const params ={ lat, lon, key }
      const response = await axios.get(url, { params });
      return response;

}
