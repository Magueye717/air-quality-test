const AirQuality = require("../models/air_quality.model");
const http_service = require("../../services/http_service")
const cron = require("node-cron");
const utils = require("../../utils");
require("dotenv/config");

// Retrieve air quality by coordinates.
exports.get_polution_by_coordinates = async (req, res) => {
     
    const { error } = utils.validate(req.query);
    const {latitude:lat, longitude:lon, key } = req.query;
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const response =  await http_service.get_data_by_coordinates(process.env.URL,lat, lon);
        result = utils.format_data(response)
        res.status(200).send(result);
    } catch (err) {
        if (err.response){
            if (err.response.data.data.message == "city_not_found"){
                res.status(400).send({
                    message: "city not found"
                });
            }else if (err.response.data.data.message == "Too Many Requests"){
                res.status(400).send({
                    message: "Too Many Requests"
                });
            }else{
                res.status(500).send({
                    message: "Somthing went wrong."
                });
                console.error("ERROR: ", err.response.data);
            }
        }else{
            res.status(500).send({
                message: "Somthing went wrong."
            });
            console.log("ERROR: ", err);

        }
    }

};

// Get the max pollution Air quality from the db
exports.max_pollution = async (req, res) => {
    
    // Query pipeline
    let pipeline = [
        {$match: {city: 'Paris'}},
        {$project: {_id: 1, created_at: 1, time:1}},
        {$sort: {"pollution.aqius": -1 }},
        {$limit: 1}
    ]
    const pollution = await AirQuality.aggregate(pipeline);
    res.send({pollution: pollution[0]});
};

