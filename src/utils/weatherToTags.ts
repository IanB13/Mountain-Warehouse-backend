import { WeatherData, Tag } from '../types/types';
// Adds tags based off weather
const weatherToTags = (weatherData: WeatherData): Tag[] => {
    const tags = [];
    const weatherType = weatherData.weather[0].main;
    console.log(weatherType);
    switch (weatherType) {
        case Tag.snow:
            tags.push(Tag.snow);
            break;
        case Tag.rain:
        case 'Thunderstorm':
            tags.push(Tag.rain);
            break;

    }

    const lowTemp = weatherData.main.temp_min - 273;
    const highTemp = weatherData.main.temp_max - 273;

    const tempsCelsius = [lowTemp, highTemp];

    for (const temp of tempsCelsius) {
        switch (true) {
            case (temp < -15):
                if (!tags.includes(Tag.extremeCold)) {
                    tags.push(Tag.extremeCold);
                }
                break;
            case (temp < 0):
                if (!tags.includes(Tag.extremeCold)) {
                    tags.push(Tag.veryCold);
                }
                break;
            case (temp < 10):
                if (!tags.includes(Tag.cold)) {
                    tags.push(Tag.cold);
                }
                break;
            case (temp < 20):
                if (!tags.includes(Tag.mild)) {
                    tags.push(Tag.mild);
                }
                break;
            case (temp < 25):
                if (!tags.includes(Tag.warm)) {
                    tags.push(Tag.warm);
                }
                break;
            case (temp > 25):
                if (!tags.includes(Tag.hot)) {
                    tags.push(Tag.hot);
                }
                break;
        }
    }

    return tags;
};

export default weatherToTags;