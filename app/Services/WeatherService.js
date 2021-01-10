import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }

  flipDegrees(){
    if(ProxyState.weather.type === "F")
    {
      ProxyState.weather.type = "C";
    }
    else{
      ProxyState.weather.type = "F";
    }
  }
}

const weatherService = new WeatherService();
export default weatherService;