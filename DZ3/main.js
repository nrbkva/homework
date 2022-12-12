for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}


var summ = 0

do {
  var number = +prompt("введите число")
  if (number > 0){
    summ += number
  }
}while(number >= 0)

console.log(summ);