export default class Image {

  constructor(data) {
    console.log('[RAW IMAGE API DATA]', data);

    this.url = data.url;
    this.large_url = data.large_url;
  }
}