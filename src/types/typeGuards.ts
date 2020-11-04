import { WeatherData , Coord, MainTemp, Weather } from "./types";

export const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

export const isNum = (num: unknown): num is number  =>{
    return typeof num === 'number' && !isNaN(num);
};

export const isWeatherData = (weatherData: unknown): weatherData is WeatherData =>{
  if(weatherData){
      if(isCoord((weatherData as WeatherData).coord) &&
        isWeatherArray((weatherData as WeatherData).weather) &&
        isMainTemp((weatherData as WeatherData).main)
      ){
        return true;
      }
  } 
  return false;

};

const isCoord = (coord: unknown): coord is Coord =>{
  if(coord){
    if(isNum( (coord as Coord).lon ) && isNum( (coord as Coord).lat ) ){
      return true;
    }
  }
  console.error("coord has missing or incorrect type");
  return false;
};

const isWeatherArray = (weatherArray: unknown): weatherArray is Weather[]=>{
  if(weatherArray){
    for( const weather of (weatherArray as Weather[])){
      if(!isWeather(weather)){
        return false;
      }
    }
  }
  return true;
};

const isWeather = (weather: unknown): weather is Weather =>{
  if(weather){
    if(
    isNum( (weather as Weather).id ) &&
    isString( (weather as Weather).description ) &&
    isString( (weather as Weather).icon ) &&
    isString( (weather as Weather).main )
    ){
      return true;
    }
  }
  console.error("weather has missing or incorrect type");
  return false;
};


const isMainTemp = (mainTemp: unknown): mainTemp is MainTemp =>{
  if(mainTemp){
    if(
    isNum( (mainTemp as MainTemp).feels_like ) &&
    isNum( (mainTemp as MainTemp).temp ) &&
    isNum( (mainTemp as MainTemp).temp_max ) &&
    isNum( (mainTemp as MainTemp).temp_min )
    ){
      return true;
    }
  }
  console.error("mainTemp has missing or incorrect type");
  return false;
};