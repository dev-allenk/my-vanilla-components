export const fetchImages = (state, images) => ({
  ...state,
  currentIndex: 0,
  maxCount: images.length,
  images
});

export const showPrev = state => ({
  ...state,
  currentIndex: state.currentIndex - 1
});

export const showNext = state => ({
  ...state,
  currentIndex: state.currentIndex + 1
});
