//심플 버전 델리게이트 유틸함수
const delegate = ({ element, eventType, className, callback }) => {
  element.addEventListener(eventType, e => {
    e.target.classList.contains(className) && callback(e);
  });
};
