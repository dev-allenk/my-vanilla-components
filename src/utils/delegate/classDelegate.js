export class Delegate {
  constructor(element) {
    this.element = element;
    this.delegate = this.delegate.bind(this);
    this.to = this.to.bind(this);
    this.when = this.when.bind(this);
    this.className = this.className.bind(this);
  }
  delegate(callback) {
    this.callback = callback;
    return this;
  }
  to(element) {
    this.element = element;
    return this;
  }
  when(eventType) {
    this.eventType = eventType;
    return this;
  }
  className(className) {
    try {
      this.element.addEventListener(this.eventType, e => {
        e.target.classList.contains(className) && this.callback(e);
      });
    } catch (err) {
      console.error(err);
    }
  }
}
const _ = new Delegate();
export default _.delegate;
