function isTwin(a, b) {
  var first = a.split('');
  var second = b.split('');
  var finalFlagVal = false;
  if (first.length !== second.length) {
    return finalFlagVal;
  }
  for (var i = 0 ; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      finalFlagVal = true;
      return finalFlagVal;
    } else {
      finalFlagVal = false;
      return finalFlagVal;
    }
  }
}

function convertToIntegers(strings) {
  let temp = [];
  for(var i = 0; i < strings.length; i++) {
    let data = parseInt(strings[i]);
    temp.push(data);
  }
  return temp;
}

console.log(convertToIntegers(['4', '7', '12']))


//------- Find largest number from array ------------

function findLargestNumber(array) {
  var largest = 0;
  for(var i = 0; i < array.length; i++) {
    if (largest < array[i] ) {
      largest = array[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([4,16,8,9,-20]))


//----------------------------------------------------
function spy (fun, callback) {
  if (typeof callback == 'function') {
    callback(fun);
  }
  return fun;
}

function cb() {
  console.log("The call back has been called");
}

Math.abs = spy(Math.abs, cb);
var result = Math.abs(-32);
console.log(result);
