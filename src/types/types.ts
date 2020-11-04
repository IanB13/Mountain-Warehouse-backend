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