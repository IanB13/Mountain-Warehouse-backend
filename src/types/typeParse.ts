import {WeatherData} from "./types";
import {isWeatherData} from "./typeGuards";

export const parseWeatherData = (weatherData : unknown):WeatherData =>{
    if(!isWeatherData(weatherData)){
        throw new Error(`Incorrect or missing weather Data`);
    }
    return weatherData;
};