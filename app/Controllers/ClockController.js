import { ProxyState } from "../AppState.js";
import clockService from "../Services/ClockService.js";

export default class ClockController {
  constructor() {
    var timer = setInterval(function(){
      clockService.drawClock();
    }, 1000);
  }

  switchClock() {
    try {
      clockService.switchClock();
    }
    catch (e) {
      console.error(e);
    }
  }

  ChangeColor(event)
  {
    document.body.style.color = event.value;
  }
}
