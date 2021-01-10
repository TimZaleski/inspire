import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class ClockService {
  clockType = "mil";
 drawClock(){
  let clockDiv = document.getElementById('clockDiv');
  let date = new Date();
  let hour = this.doubleDigitify(date.getHours());
  let min = this.doubleDigitify(date.getMinutes());
  let greeting = "Good ";
  if (hour >= 6 && hour < 12)
  {
    greeting += "Morning";
  }
  if (hour >= 12 && hour < 18)
  {
    greeting += "Afternoon";
  }
  if ((hour >= 18 && hour <= 23) || (hour >= 0 && hour < 6))
  {
    greeting += "Evening";
  }

  if (this.clockType != "mil")
  {
    if (hour > 12)
    {
      hour = hour - 12;
    }
  }
  clockDiv.innerText = `${hour}:${min}\n${greeting}`;

}
 doubleDigitify(val) {
  if (val < 10) {
    return "0" + val;
  }
  else {
    return val;
  }
}

 switchClock(){
  if (this.clockType === "mil")
  {
    this.clockType = "reg";
  }
  else
  {
    this.clockType = "mil";
  }
  this.drawClock();
}
}

const clockService = new ClockService();
export default clockService;