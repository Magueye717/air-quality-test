const mongoose = require("mongoose");

const airQuality = mongoose.Schema({
    city:{
        type: String
    },
    pollution: {
        type: Object,
    },
    time: {
        type: String,
        required: true,
    },
    created_at : { 
        type : Date, 
        default: Date.now 
    }

});

module.exports = mongoose.model("air_quality", airQuality);