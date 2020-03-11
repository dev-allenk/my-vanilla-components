import Components from '../lib/Components.js';
import delegate from '../utils/delegate/functionDelegate.js';

export default class Carousel extends Components {
  constructor(props) {
    super(props);
  }
  async init() {
    this.eventOn();
    await this.fetchImages(); //willMount
    this.initialRender();
    this.cacheElements();
    hide(this.leftButton);
  }

  initialRender() {
    this.el.innerHTML = /*html*/ `
    <div class='carousel-wrapper'>
      <div class='carousel-viewport'>
        <div class='carousel-container'>
          ${super.state.images
            .map(
              image => /*html*/ `
              <img class='carousel-images' src=${image.urls.thumb}/>
              `
            )
            .join('')}
        </div>
        <button type="button" class="carousel-button carousel-left">
          왼쪽
        </button>
        <button type="button" class="carousel-button carousel-right">
          오른쪽
        </button>
      </div>
    </div>
    `;
  }

  cacheElements() {
    this.container = this.el.querySelector('.carousel-container');
    this.leftButton = this.el.querySelector('.carousel-left');
    this.rightButton = this.el.querySelector('.carousel-right');
  }

  render() {
    if (super.isInitialRender) return;

    const { currentIndex, maxCount } = super.state;
    const isLeftEnd = currentIndex === 0;
    const isRightEnd = currentIndex === maxCount - 1;

    _$(this.container).setCss({
      transform: `translateX(${currentIndex * -100}%)`
    });
    isLeftEnd ? hide(this.leftButton) : show(this.leftButton);
    isRightEnd ? hide(this.rightButton) : show(this.rightButton);
  }

  eventOn() {
    delegate(this.showPrev.bind(this))
      .to(this.el)
      .when('click')
      .className('carousel-left');

    delegate(this.showNext.bind(this))
      .to(this.el)
      .when('click')
      .className('carousel-right');
  }

  showPrev() {
    this.store.dispatch({ type: 'showPrev' });
  }

  showNext() {
    this.store.dispatch({ type: 'showNext' });
  }

  async fetchImages() {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?count=5&${ACCESS_KEY}`
    );
    const data = await res.json();

    this.store.dispatch({ type: 'fetchImages', payload: data });
  }
}

const ACCESS_KEY = 'client_id=0IBgt18SLbzqSOv4S7DC5MA9wgG0eyU-MJ_6eGIepzk';

const show = element => _$(element).removeClass('hidden');
const hide = element => _$(element).addClass('hidden');

const _$ = element => ({
  setCss(styles) {
    element.style.cssText = Object.keys(styles)
      .map(key => `${key}: ${styles[key]};`)
      .join('');
  },
  addClass(...className) {
    element.classList.add(...className);
  },
  removeClass(...className) {
    element.classList.remove(...className);
  }
});
