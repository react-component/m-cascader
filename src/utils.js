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

export function pick(props, wl) {
  const ret = {};
  wl.forEach((w) => {
    if (w in props) {
      ret[w] = props[w];
    }
  });
  return ret;
}

export function noop() {
}

export const COLS = 3;
