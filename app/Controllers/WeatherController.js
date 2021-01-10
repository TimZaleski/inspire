import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let temp = "";
  let degreeVal = 0;
  if (ProxyState.weather.type === "F")
  {
    degreeVal = ProxyState.weather.fahrenheit;
  }
  else
  {
    degreeVal = ProxyState.weather.celsius;
  }
  temp = `<img src="${ProxyState.weather.icon}">${degreeVal}°${ProxyState.weather.type}`;
  document.getElementById('weatherDiv').innerHTML = temp;
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  flipDegrees()
  {
    weatherService.flipDegrees();
    drawWeather();
  }
}
