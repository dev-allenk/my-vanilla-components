const delegate = callback => ({
  to: element => ({
    when: eventType => ({
      className: className => {
        element.addEventListener(eventType, e => {
          e.target.classList.contains(className) && callback(e);
        });
      }
    })
  })
});

export default delegate;
