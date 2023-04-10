export function getObservables() {
  let observers = [];

  function subscribe(fn) {
    observers.push(fn)
  }
  function unsubscribe(fn) {
    observers = observers.filter((observer) => {
      if (observer !== fn) {
        return item;
      }
    })
  }
  function notify(fn) {
    observers.forEach(ob => ob(fn))
  }

  return {
    subscribe,
    unsubscribe,
    notify
  }
}