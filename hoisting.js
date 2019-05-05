//At run time java script runs the code, so it moves declaration part using hoising to the top of code
console.log(i);
for(var i=0; i < 5; i++) {
  console.log(i);
}
console.log("I am outside block", i);

//using ES6 let keyword
console.log(j);
for(let j=0; j < 5; j++) {
  console.log(j);
}
console.log("I am outside block", j);



function func1() {
    var a=5;
    console.log(a);
    var b=6;
}
/**************************************************************/
// console.log();
function func1() {
  //console.log(var1);
  var var1 = 2;
  //console.log(var1);
}
var var1 = 3;
//console.log(var1);
func1();


/**************************************************************/
function func() {
  //console.log(var1);
  //console.log(let1);
  if(true) {
    var var1 = 2;
    let let1 = 23;
  }
}

/**************************************************************/
func1();
func2();
function func1() {           //declaration
  console.log('func1');
}

var func2 =  function() {     //expression
  console.log('func2');
}
