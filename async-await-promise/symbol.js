//Symbol is a primitive type. Which is use to make the variables private.

const name = Symbol('name');
const user = {
  [name] : 'pardeep bhasin',
  rollNo : 124
}
console.log(user);
console.log(user[name]);
const symbols = Object.getOwnPropertySymbols(user);
console.log(user[symbols[0]]);

console.log(Object.keys(user))
console.log(Reflect.ownKeys(user));
