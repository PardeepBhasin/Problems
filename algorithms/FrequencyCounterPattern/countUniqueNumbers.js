function countUniqueNumbers(array) {
  let i = 0;
  for(var j = 1 ; j < array.length; j++) {
    if(array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

console.log(countUniqueNumbers[1,2,3,1,1,3,3,6,7,8]);
