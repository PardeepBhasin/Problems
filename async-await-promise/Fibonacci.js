function fibonacci(n) {
  console.log('I am called');
  var result = [];
  var prevIndex = 0;;
  for(var i = 0; i < n; i++) {
    if ( n > 0 ) {
      if ( i === 0 || i === 1) {
        prevIndex = i;
        result.push(i)
      } else {
        const data =result[prevIndex] + result[prevIndex - 1];
        prevIndex = i;
        result.push(data);
      }
    }
  }
  return result
}

const series =  new fibonici(50);
console.log(series);
