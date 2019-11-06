const class2type = {};

"Boolean Number String Function Array Date RegExp Object Error"
  .split(" ")
  .forEach((v, i) => {
    class2type[`[object ${v}]`] = v.toLowerCase();
  });

console.log(class2type);

function type(obj) {
  //处理在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]
  if (obj == null) {
    return obj + "";
  }

  return typeof obj === "object" || typeof obj === "function"
    ? class2type[Object.prototype.toString.call(obj)] || "object"
    : typeof obj;
}

//测试用例
var number = 1; // [object Number]
var string = "123"; // [object String]
var boolean = true; // [object Boolean]
var und = undefined; // [object Undefined]
var nul = null; // [object Null]
var obj = { a: 1 }; // [object Object]
var array = [1, 2, 3]; // [object Array]
var date = new Date(); // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g; // [object RegExp]
var func = function a() {};

function checkType(...types) {
  types.forEach(e => {
    console.log(type(e));
  });
}

checkType(
  number,
  string,
  boolean,
  und,
  nul,
  obj,
  array,
  date,
  error,
  reg,
  func
);
