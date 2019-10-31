Function.prototype.myCall = context => {
  if (typeof this !== "function") {
    throw new TypeError("no function");
  }

  context.fn = this;
  let args = Array.prototype.slice.call(arguments);
  let result = context.fn(args.slice(1));
  delete context.fn;
  return result;
};
