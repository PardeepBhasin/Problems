//Split, splice, slice Difference
//Map, Filter, Reduce
//for each loop

const arr = [1,2,3,4];
const data = arr.reduce(function(results, num) {
    return results + num;
})

var array=[1,2,3,4,5];
console.log(array.splice(2));


var array1=[1,2,3,4,5]
console.log(array1.slice(2,3))


var array2=[6,7,8,9,0];
const updated = array2.splice(2)
console.log(updated);


// const val = "pardeep bhasin";
// const str = val.split(' ');
// console.log(str);
// const combineValue = str.join("tanu");
// console.log(combineValue);

