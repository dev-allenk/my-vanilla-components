import Component from '../lib/Component.js';
import delegate from '../utils/delegate/functionDelegate.js';
import { _$, show, hide } from '../utils/index.js';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
  }
  async init() {
    this.eventOn();
    await this.fetchImages();
    this.initialRender();
    this.cacheElements();
    hide(this.leftButton);
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
    super.dispatch({ type: 'showPrev' });
  }

  showNext() {
    super.dispatch({ type: 'showNext' });
  }

  async fetchImages() {
    const data = await super.api.fetchRandomImages();
    super.dispatch({ type: 'fetchImages', payload: data });
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

    this.moveCarousel(currentIndex);

    isLeftEnd ? hide(this.leftButton) : show(this.leftButton);
    isRightEnd ? hide(this.rightButton) : show(this.rightButton);
  }

  moveCarousel(index) {
    _$(this.container).setCss({
      transform: `translateX(${index * -100}%)`
    });
  }
}
