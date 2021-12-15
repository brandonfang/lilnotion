export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function pasteAsPlainText(e) {
  e.preventDefault();
  const text = (e.originalEvent || e).clipboardData.getData('text/plain');
  document.execCommand('insertHTML', false, text);
}

export function getCaretPosition() {}

export function setCaretToEnd() {}
