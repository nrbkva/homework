// var button = document.getElementById("click")
// for (var i = 0; i = 1; i++) {
// }
// //   count = 0;
// // button.onclick = function() {
// //   count += 1;
// //   button.innerHTML = 'Плюс' + count;
// // };

var count = 0;
function func() {
    var decrement = document.getElementsByClassName("decrement");
    var increment = document.getElementsByClassName("increment");
    if (document.onclick = decrement) {
        count--;
        console.log(count);
    } else if (document.onclick = increment) {
        count++;
        console.log(count);
    }
}
let input = document.querySelector('input');
console.log(input.value);

//  '.counter .decrement'.click(function() {
//   let $input = $(this).parent().find('.quantity');
//   let count = parseInt($input.val()) - 1;
//   count = count < 1 ? 1 : count;
//   $input.val(count);
//  });

// const buttons = document.querySelectorAll('button');
//
// function count1() {
//   let counter = 0;
//   return function() {
//     return counter+=1;
//   };
// }
//
// function count2() {
//   let counter = 0;
//   return function() {
//     return counter-=1;
//   };
// }
// for (let button of buttons) {
//   const counter = count1();
//   button.addEventListener('click', function() {
//     // this.textContent = counter1();
//   });
// }


