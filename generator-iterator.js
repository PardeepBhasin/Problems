//Generator Function
function* TextTrackList() {
    yield setTimeout(function () {
      console.log("I am called");
    }, 5000)
}
const iterator = TextTrackList();
iterator.next();

//Custom Iterator Implementation:

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;
  const iterableObj  = {
    next : () => {
      let result;
      if (nextIndex <= end) {
        result =  {value: nextIndex, done : false};
        nextIndex += step;
        iterationCount++;
        return  result;
      }
      return {value: iterationCount, done : true}
    }
  }
  return iterableObj;
}

let it = makeRangeIterator(1, 10, 2);
let result = it.next();
while(!result.done) {
   console.log(result.value);
   result = it.next();
}
console.log("Iterated over sequence of size: ", result.value);

//Generator Function Implementation

function* generatorFunction(i) {
  console.log("I am called");
  console.log(i);
  const j = 5 * (yield (i * 10));
  console.log("Please fire next");
  console.log(j);
  const k = yield (2 * j / 4);
  console.log("Last yield");
  console.log(k);
  return (i + j + k)
}

const results = generatorFunction(10);
results.next(20);
results.next(1);
results.next(5);

//-------------------------------------------------------
function* g1() {
  yield 2;
  console.log('g1 2');
  yield 3;
  console.log('g1 3');
  yield 4;
  console.log('g1 4');
}

function* g2() {
  console.log('Execute before first yield');
  yield 1;
  console.log("First yield");
  console.log('Execute after first yield');
  yield* g1();
  yield 5;
  console.log("I am done");
}

let newIterator = g2();
newIterator.next();
newIterator.next();
newIterator.next();
newIterator.next();
newIterator.next();
newIterator.next();

//---------------------------------
function* genFuncChild() {
  console.log("called");
  yield 1;
  yield 2;
  return 'pardeep bhasin';
  yield 3;
}

function* genFuncMain() {
  const result = yield* genFuncChild();
  console.log(result);
  yield 'the end';
}

let generator =  genFuncMain();
generator.next();
generator.next();
generator.next();
generator.next();

//-------------------------------------
//yield* can also iterate over iterable objetcs like Array, String and Map

function* generatorFunction() {
  yield* [1, 2];
  yield* 'HI';
  yield*  arguments
}

const sequence =  generatorFunction(5,4);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
