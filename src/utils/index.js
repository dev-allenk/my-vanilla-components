//심플 버전 델리게이트 유틸함수
const delegate = ({ element, eventType, className, callback }) => {
  element.addEventListener(eventType, e => {
    e.target.classList.contains(className) && callback(e);
  });
};

export const show = element => _$(element).removeClass('hidden');
export const hide = element => _$(element).addClass('hidden');

export const _$ = element => ({
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
