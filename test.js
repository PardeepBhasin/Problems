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
    console.log(strings);
    let data = parseInt(strings[i]);
    temp.push(data);
  }
  return temp;
}

convertToIntegers(['4', '7', '12'])


// isTwin('acb', 'cab');

function spy (fun, callback) {
  return fun
}

function cb() {
  console.log("The call back has been called");
}

Math.abs = spy(Math.abs, cb);
var result = Math.abs(-32);
console.log(result);
