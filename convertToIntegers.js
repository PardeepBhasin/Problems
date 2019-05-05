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
