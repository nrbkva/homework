
// const phoneInput = document.querySelector('#phoneInput')
// const phoneCheck = document.querySelector('#phoneCheck')
// const phoneResult = document.querySelector('.phoneResult')
//
// const phoneRegExp = /^\+7 \d{3}-\d{3}-\d{2}-\d{2}$/
//
// phoneCheck.addEventListener('click', () => {
//     // console.log(phoneInput.value.match(phoneRegExp))
//     if (phoneRegExp.test(phoneInput.value)){
//         phoneResult.innerText = 'OK'
//         phoneResult.style.color = 'green'
//     }else {
//         phoneResult.innerText = 'NOT OK'
//         phoneResult.style.color = 'red'
//     }
// })

function look_for_key(box) {
  for (let key in box) {
    if (item.is_a_box()) {
      look_for_key(item);
    } else if (item.is_a_key()) {
      console.log("found the key!")
    }
  }
}



