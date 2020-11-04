export interface WeatherData {
    coord: Coord
    weather: Weather[]
    main: MainTemp
}

export interface Coord {
    lon: number
    lat: number 
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface MainTemp {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
}

export interface Item {
    name: string
    imageURL: string
    itemURL: string
    tags : Tag[]
}

export enum Tag {
    rain,
    snow,
    extremeCold,
    cold,
    temperate,
    mild,
    hot
}

export class HttpException extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string) {
      super(message);
      this.status = status;
      this.message = message;
    }
  }
   