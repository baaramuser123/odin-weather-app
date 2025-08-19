import { DayWeather } from "./objects";
export {getWeatherData};
console.log("yo");


async function getWeatherData(city){
    try{
        const weatherArray = [];
        const rawWeatherData = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
            + city + "?unitGroup=us&key=YECUKU2A4VCYN4WUKEE8MPZV2&contentType=json", {
            "method": "GET",
            "headers": {
                }
            }
        );
        console.log(rawWeatherData);
        const weatherData = await rawWeatherData.json();
        console.log(weatherData);
        for(let i = 0; i < weatherData.days.length; i++){
            const date = weatherData.days[i].datetime;
            const condition = weatherData.days[i].conditions;
            const tempmax = weatherData.days[i].tempmax;
            const tempmin = weatherData.days[i].tempmin;
            const icon = weatherData.days[i].icon;
            const day = new DayWeather(date, condition, icon, tempmax, tempmin);
            weatherArray.push(day);
        }
        return weatherArray;
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
    }
    catch (error){
        console.log(error);
    }
}