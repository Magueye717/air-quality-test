const cron = require('node-cron');
const air_quality = require('./api/cronjobs/air_quality.cron');

//Call the save cron job function
cron.schedule("*/15 * * * * *", air_quality);