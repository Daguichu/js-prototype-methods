Function.prototype.myBind = context => {
  if (typeof this !== "function") {
    throw new TypeError("no Function");
  }
  const args = [...arguments].slice(1);
  const that = this;
  return function F() {
    if (this instanceof F) {
      return new that(...args, ...arguments);
    } else {
      that.apply(context, args.concat(...arguments));
    }
  };
};
