// Deep Copy Example
let deepObj = {
  'places' : ['Corner', 'foo mart'],
  'seasons' : 5
}

let newObj = JSON.parse(JSON.stringify(deepObj));
deepObj.places[0] = 'pardeep'
console.log(newObj, deepObj)

//Primitive value Example
let s = "pardeep";
let g = s;
g = "bhasin"
console.log(s, g);

// Shallow  Copy Example
let shallowArr = ['123', '245', '212'];
let newArray = shallowArr;
shallowArr[0] = '786' //Now new array is refering to  shallow array. So any change in shallow array it impacts the new array.
console.log(shallowArr, newArray) //Output is [ '786', '245', '212' ] [ '786', '245', '212' ] 

// So to resolve the above problem. will use Object.assign

let shallowArr2 = ['123', '245', '212'];
let newArray2 = Object.assign([], shallowArr2);
shallowArr2[0] = '919'
console.log(shallowArr2, newArray2); //Output [ '919', '245', '212' ] [ '123', '245', '212' ] 

//Add properties in Object using Object.assign method
const details = {
  name: "pardeep"
}
Object.assign(details, {
  rollNo: 1234
})
details

