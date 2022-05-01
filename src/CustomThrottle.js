const throttle = (callback, interval) => {
  let timerId;
  let allowEvents = true;

  return function() {
    let context = this;
    let args = arguments;

    if (allowEvents) {
      callback.apply(context, args)
      allowEvents = false;
      timerId = setTimeOut(function(){
        allowEvents = true
      }, interval)
    }
  }
}
