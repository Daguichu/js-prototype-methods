Function.prototype.myApply = (context, ...args) => {
  if (typeof this !== "function") {
    throw new TypeError("noFunction");
  }
  context = context || window;
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};
