//Big O complexity Test
//Instead of creating nested loop and compare each elemnt of outer loop with inside loop which gives O(n2) complexity.
//Below Frequency counter approach will give O(n) complexity.
function validAnagram(str, str1)  {
  if(str.length !== str1.length) {
    return false;
  }
  var frequencuCounter1 = {};
  var frequencuCounter2 = {};
  for(var val of str) {
    frequencuCounter1[val] = (frequencuCounter1[val] || 0) + 1;
  }
  for(var val of str1) {
    frequencuCounter2[val] = (frequencuCounter2[val] || 0) + 1;
  }
  console.log(frequencuCounter1);
  console.log(frequencuCounter2);
  for(var key in frequencuCounter1) {
    if (frequencuCounter1[key] !== frequencuCounter2[key]) {
      return false;
    }
  }
  return true
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
