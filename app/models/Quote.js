export default class Quote {

  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data);

    this.author = data.quote.author;
    this.body = data.quote.body;
  }
}