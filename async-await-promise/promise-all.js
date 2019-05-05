const fetch = require('node-fetch');

function fetchCatsData(userId) {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  .then(response => response.json())
  .then(user => {
    const promises = user.cats.map(catId => {
      return fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
    })
    return Promise.all(promises);
  })
}

//To extract the JSON body content from the response, we use the json() method

const result = fetchCatsData(123);
result.then(function (data) {
  console.log(data);
})
