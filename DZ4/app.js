var array = ['div', 'a', 'div', 'li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'a', 'div', 'span', 'div', 'ul'];
var result = {};
for (var i = 0; i < array.length; i++) {
  var a = array[i];
  if (result[a]) result[a] += 1;
  else result[a] = 1;
}
console.log(result);
var arrMas = Object.values(result);
var newArr = Object.keys(result);
for (var i = 0; i < arrMas.length; i++) {
  newArr[i] = newArr[i] + ": " + arrMas[i];
}
var arrObj = { ...newArr };
console.log(arrObj);
