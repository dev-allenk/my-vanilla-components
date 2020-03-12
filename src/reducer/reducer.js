import * as todoReducer from './todoReducer.js';
import * as carouselReducer from './carouselReducer.js';

const reducer = (state, { type, payload }) =>
  ({
    ...carouselReducer,
    ...todoReducer
  }[type](state, payload));

export default reducer;
