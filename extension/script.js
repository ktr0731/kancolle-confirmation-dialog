window.addEventListener('beforeunload', e => {
  e.returnValue = '終了しますか？';
}, false);
