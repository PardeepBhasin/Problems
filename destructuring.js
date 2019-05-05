function foo({ a, b, c }) {
  // no need for:
  // var a = obj.a, b = obj.b, c = obj.c
  console.log( a, b, c );
}
foo( {
  c: [1,2,3],
a: 42,
b: "foo"
}); //42"foo"[1,2,3]
