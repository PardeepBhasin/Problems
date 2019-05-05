//Async Await Demo

const fetch = require('node-fetch');

async function fetchCatByAsynchFunction(userId) {
  console.log('Fetching Response---------');
  const response =  await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const data =   await response.json()
  const catImgUrls =[];
  for(const catId of  data.cats) {
    const responeData= await fetch(`https://catappapi.herokuapp.com/cats/${catId}`);
    const catData = await responeData.json();
    catImgUrls.push(catData.imageUrl);
  }
  console.log('Response Done---------');
  return catImgUrls;
}

const result = fetchCatByAsynchFunction(123);
result.then((f) => {
  console.log(f);
})
