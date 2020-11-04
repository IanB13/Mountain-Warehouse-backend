import axios from "axios";
import {weatherAPIKey} from "../utils/config";
import {WeatherData} from "../types/types";
import {parseWeatherData} from "../types/typeParse";
const weatherAPI = async (lat : number ,lon: number):Promise<WeatherData | null> =>{

    const config = {
        params: {
            lat,
            lon,
            appid: weatherAPIKey
        }
    };

    try {
        const request = await axios.get("https://api.openweathermap.org/data/2.5/weather",config);
        const weatherData = parseWeatherData(request.data);
        console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.log(error);
    }
    return null;
};

export default weatherAPI;