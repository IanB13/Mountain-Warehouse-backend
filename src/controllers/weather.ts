import express from 'express';
import {isNum} from '../types/typeGuards';
import weatherApi from '../services/weatherAPI';
import weatherToTags from '../utils/weatherToTags';

const weatherRouter = express.Router();

weatherRouter.get('/', async (request, response) => {
    console.log(request.query);
    const latStr = request.query.lat;
    const lonStr = request.query.lon;

    let lat = null;
    let lon = null;

    if(latStr && lonStr){
        lat = +latStr;
        lon = +lonStr;
        if (isNum(lon) && isNum(lat)) {
            const weatherData = await weatherApi(lat, lon);
            if (weatherData) {
                weatherData.tags = weatherToTags(weatherData);
                response.status(200).json(weatherData);
            }
            else {
                response.status(400).send("weatherAPI did not respond");
            }
        }
    }
    else{
        response.status(400).send("missing lat and/or lon");
    }
});



export default weatherRouter;