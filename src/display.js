import { getWeatherData } from "./weather-api";
// let x = "partly-cloudy-day"
// import(`./assets/1st Set - Color/${x}.png`);
// import MyImage from `./assets/1st Set - Color/${x}.png`;
//<div class="item">
//    <header>Monday <span class="date">8/18</span></header>
//    
//    <div>Sunny</div>
//    <div>90.<span class="low">68.</span></div>
//</div>

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/1st Set - Color', false, /\.(png|jpe?g|svg)$/));


const dayOfWeekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export async function displayWeather(city){
    try{
    const daysArray = await getWeatherData(city);
    const container = document.getElementById("weather-container");
    container.textContent = "";
    for(let i=0; i<daysArray.length; i++){
        const dayItem = document.createElement("div");
        dayItem.classList.add("item");
        const dayOfWeek = document.createElement("header");
        const dateText = document.createElement("span");
        const condition = document.createElement("div");
        const highTemp = document.createElement("div");
        const lowTemp = document.createElement("span");
        const icon = document.createElement("img")
        dateText.classList.add("date");
        lowTemp.classList.add("low");
        dayOfWeek.textContent = dayOfWeekArray[daysArray[i].date.getDay()];
        dateText.textContent = daysArray[i].date.getMonth() + "/" + daysArray[i].date.getDate();
        // condition.textContent = daysArray[i].condition;
        // icon.setAttribute("src", "./assets/1st Set - Color/"+ daysArray[i].icon + ".png");
        // icon.setAttribute("src", MyImage);
        console.log(daysArray[i].icon+".png")
        console.log(images);
        icon.setAttribute("src", images[daysArray[i].icon+".png"]);
        icon.setAttribute("alt", daysArray[i].condition);
        highTemp.textContent = daysArray[i].tempmax + "°";
        lowTemp.textContent = daysArray[i].tempmin + "°";
        dayOfWeek.appendChild(dateText);
        condition.appendChild(icon);
        highTemp.appendChild(lowTemp);
        dayItem.append(dayOfWeek, condition, highTemp);
        container.appendChild(dayItem);
    }
    }
    catch(err){
        console.log(err);
        alert("Oops, something went wrong. Try a different city or check your spelling!");
    }
}