export const delegate = ({ element, eventType, className, callback }) => {
  element.addEventListener(eventType, e => {
    e.target.classList.contains(className) && callback(e);
  });
};
