const person  = {
  first : 'pardeep',
  last : 'bhasin'
}

const proxyObj = new Proxy(person, {
  get : (target, prop) => {
     if(!(prop in target)) {
      return prop.split('_').map(function (part) {
        return target[part]
      }).join(' ')
     }
     return target[prop]
  }
})

console.log(proxyObj.first_last)

//Reflection

