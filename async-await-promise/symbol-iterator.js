//Symbol.iterator well known symbol specifies the default iterator of object
const sequence = new Object();

sequence[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;

}
console.log([...sequence]);

