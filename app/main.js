import ImageController from "./Controllers/ImageController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
import QuoteController from "./Controllers/QuoteController.js";
import ClockController from "./Controllers/ClockController.js";

class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.imageController = new ImageController();
    this.quoteController = new QuoteController();
    this.todoController = new TodoController();
    this.clockController = new ClockController();
  }
}

window["app"] = new App();