import express from 'express';
import {isNum} from '../types/typeGuards';
import weatherApi from '../services/weatherAPI';
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
        if( isNum(lon) && isNum(lat)){
            const weatherData = await weatherApi(lat,lon);
            response.status(200).json(weatherData);
        }
    }
    else{
        response.status(400).send("error");
    }
});



export default weatherRouter;