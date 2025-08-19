import "./reset.css";
import "./style.css";
// import { getWeatherData } from "./weather-api";
import { displayWeather } from "./display";
console.log("hello world");
// displayWeather("cincinnati");
// const gotData = getWeatherData("cincinnati");
// gotData.then((value) => console.log(value));

const citySearchbar = document.getElementById("city");
const searchButton = document.getElementById("search");
searchButton.addEventListener("click", (event)=>{
    displayWeather(citySearchbar.value);
});