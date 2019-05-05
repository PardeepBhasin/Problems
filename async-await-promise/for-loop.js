//for in loops through the numerics and non iterable objetcs

const user = {
  name: "pardeep",
  rollNo: "1234"
}

for(let data in user) {
  console.log(user[data]);
}

//for of loops through the  iterable objects
const arr  = [1,2,3,4]

for(let data of arr) {
  console.log(data);
}
