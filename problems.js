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


//----- Custom obejct
function customSort(table, key) {
  return table.sort((a, b) => b[key] - a[key])
}

console.log(customSort([{key : 6}, {key : 9}, {key : 2}, {key : 1}, {key : 70}], 'key'))


points.sort(function(a, b){return a-b});
