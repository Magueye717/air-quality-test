const http_service = require("../../services/http_service");
const AirQuality = require('../models/air_quality.model');

//Cron job to save Paris air quality every minute
module.exports =  async (req, res) =>  {
    try {
        const lat = 48.856613, lon = 2.352222;
        const response =  await http_service.get_data_by_coordinates(process.env.LOCALHOST,lat, lon);
        const pollution =  response?.data.result.pollution;
        const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        let iqair = new AirQuality({
            created_at: Date.now(),
            time,
            city: 'Paris',
            pollution
        });
        
        // Check if request is success
        if(response.data.success){
            await iqair.save();
            console.log({"iqair":iqair});
            console.log("---------------------");
        }
    }
    catch (error) {
        if (error.response) {
            console.log("Error while saving air quality by the cron-job: "+error.response.status);
        } else{
            console.log("Error while fetching air quality by the cron-job:", error);
        }
    }
};