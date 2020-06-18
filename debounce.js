function debounce(fn, time) {
  let setTimeoutId;

  return function() {

    //cancel out previous calls
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }

    setTimeout(() => {
      fn.apply(this, arguments)
      setTimeoutId = null;
    }, time);
  }

}