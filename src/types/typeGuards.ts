import { WeatherData , Coord } from "./types";

export const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

export const isNum = (num: unknown): num is number  =>{
    return typeof num === 'number';
};

export const isWeatherData = (weatherData: unknown): weatherData is WeatherData =>{
  if(weatherData){
      if(isCoord((weatherData as WeatherData).coord)){
        return true;
      }
  } 
  return false;

};

export const isCoord = (coord: unknown): coord is Coord =>{
  if(coord){
    if(isNum( (coord as Coord).lon ) && isNum( (coord as Coord).lat ) ){
      return true;
    }
  }
  return false;
};