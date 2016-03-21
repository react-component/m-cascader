import ReactDOM from 'react-dom';

export function getDefaultValue(d, val, cols) {
  let data = d;
  let value = val;
  if (!value || !value.length) {
    value = [];
    for (let i = 0; i < cols; i++) {
      if (data && data.length) {
        value[i] = data[0].value;
        data = data[0].children;
      } else {
        value[i] = undefined;
      }
    }
  }
  return value;
}

export function addEventListener(target, eventType, cb) {
  /* eslint camelcase: 2 */
  const callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  target.addEventListener(eventType, callback, false);
  return {
    remove() {
      target.removeEventListener(eventType, callback, false);
    },
  };
}

export function contains(root, n) {
  let node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

export function noop() {
}

export const COLS = 3;
