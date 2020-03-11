import Components from '../lib/Components.js';
import delegate from '../utils/delegate/functionDelegate.js';

export default class Carousel extends Components {
  constructor(props) {
    super(props);
  }
  init() {
    this.eventOn();
    this.fetchImages();
  }

  render() {
    this.el.innerHTML = /*html*/ `
    <div class='carousel-wrapper'>
      <div class='carousel-viewport'>
        <div class='carousel-container'>
          ${super.state
            .map(
              image => /*html*/ `
              <img class='carousel-images' src=${image.urls.small}/>
              `
            )
            .join('')}
        </div>
        <button type='button' class='carousel-button carousel-left'>왼쪽</button>
        <button type='button' class='carousel-button carousel-right'>오른쪽</button>
      </div>
    </div>
    `;
  }

  eventOn() {}

  async fetchImages() {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?count=5&${ACCESS_KEY}`
    );
    const data = await res.json();

    this.store.dispatch({ type: 'fetchImages', payload: data });
  }
}

const ACCESS_KEY = 'client_id=0IBgt18SLbzqSOv4S7DC5MA9wgG0eyU-MJ_6eGIepzk';
