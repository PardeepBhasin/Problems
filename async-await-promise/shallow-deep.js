// Object.create() =>  It creates a new Object, using an existing object as a protype of newly created object.
const o5 = Object.create({}, {
  p: {
    value: 22,
    writable: false,
    enumerable: false,
    configurable: false
  }
});

// Object.assign() => It copies the properties from source objetc to target object. But will not copy the non enumerable object.

const o6 = Object.create({}, {
  p: {
    value: 22,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

//Object.assign only do shallow copy
//To do deep clone of object please refer JSON.parse(JSON.stringify(obj1)). To wrap your source object in syntax
