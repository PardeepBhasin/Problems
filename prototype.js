function talk() {
  console.log(this.sound);
}

let animal = {
  talk
}
let dog = {
  sound: 'woof!'
}

Object.setPrototypeOf(dog, animal);
animal.talk = function() {
  console.log("I am little teapot" +this.sound);
}

dog.talk();
