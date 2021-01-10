import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function drawQuote() {

  document.getElementById('quoteDiv').innerHTML = ProxyState.quote.body;
  document.getElementById('authorDiv').innerHTML = ProxyState.quote.author;
}
export default class QuoteController {
  constructor() {
    ProxyState.on("quote", drawQuote);
    this.getQuote();
  }

  getQuote() {
    try {
      quoteService.getQuote();
    }
    catch (e) {
      console.error(e);
    }
  }
}
