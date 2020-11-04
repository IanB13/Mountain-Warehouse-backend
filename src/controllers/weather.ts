import express from 'express';
import weatherApi from '../services/weatherAPI';
const weatherRouter = express.Router();

weatherRouter.get('/', async (_request, response) => {
    const weatherData = await weatherApi(51.546498, -0.321722);
    response.status(200).json(weatherData);
});



export default weatherRouter;