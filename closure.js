for(var i = 0; i < 3; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  })(i)
}
// i = 0  f(c: i(2))
// i = 1 f(c: i(2))
// i = 2 f(c: i(2))
console.log("----------------------------------------------");
for(let j = 0; j < 4; j++) {
  setTimeout(() => {
    console.log(j)
  }, 1000)
}

//Closure is a concept in which outer scope variables are accessed in inner function. Even after the completion of main function execution still the
//variables are available for inner function as refernce

