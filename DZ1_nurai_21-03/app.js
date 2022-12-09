var name = prompt('введите свое имя: ')
var surname = prompt('введите свою фамилию: ')
var password = prompt('введите пароль:')
if (password === 'admin') {
    alert( name + ' ' + surname, 'Пароль верный' );
  } else if (password === '' || password === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }


var day = prompt('Введите день');
var month = prompt('Введите месяц');
if (month === 'март' && day >= 21 && day <=31) {
    alert('ваш знак зодиака овен')
} else if(month === 'апрель' && day <=20 && day <=31) {
    alert('ваш знак зодиака овен')
}else if (month === 'апрель' && day >= 21 && day <=31) {
    alert('ваш знак зодиака телец')
} else if(month === 'май' && day <=21 && day <=31) {
    alert('ваш знак зодиака телец')
}else if (month === 'май' && day >= 22 && day <=31) {
    alert('ваш знак зодиака близнецы')
} else if(month === 'июнь' && day <=22 && day <=31) {
    alert('ваш знак зодиака близнецы')
}else if (month === 'июнь' && day >= 22 && day <=31) {
    alert('ваш знак зодиака рак')
} else if(month === 'июль' && day <=22 && day <=31) {
    alert('ваш знак зодиака рак')
} else if (month === 'июль' && day >= 23 && day <=31) {
    alert('ваш знак зодиака лев')
} else if(month === 'август' && day <=23 && day <=31) {
    alert('ваш знак зодиака лев')
} else if (month === 'август' && day >= 24 && day <=31) {
    alert('ваш знак зодиака дева')
} else if(month === 'сентябрь' && day <=22 && day <=31) {
    alert('ваш знак зодиака дева')
} else if (month === 'сентябрь' && day >= 23 && day <=31) {
    alert('ваш знак зодиака весы')
} else if(month === 'октябрь' && day <=23 && day <=31) {
    alert('ваш знак зодиака весы')
} else if (month === 'октябрь' && day >= 24 && day <=31) {
    alert('ваш знак зодиака скорпион')
} else if(month === 'ноябрь' && day <=22 && day <=31) {
    alert('ваш знак зодиака скорпион')
} else if (month === 'ноябрь' && day >= 23 && day <=31) {
    alert('ваш знак зодиака стрелец')
} else if(month === 'декабрь' && day <=21 && day <=31) {
    alert('ваш знак зодиака стрелец')
} else if (month === 'декабрь' && day >= 22 && day <=31) {
    alert('ваш знак зодиака козерог')
} else if(month === 'январь' && day <=20 && day <=31) {
    alert('ваш знак зодиака козерог')
} else if (month === 'январь' && day >= 21 && day <=31) {
    alert('ваш знак зодиака водолей')
} else if(month === 'февраль' && day <=18 && day <=31) {
    alert('ваш знак зодиака водолей')
} else if (month === 'февраль' && day >= 19 && day <=31) {
    alert('ваш знак зодиака рыбы')
} else if(month === 'март' && day <=20 && day <=31) {
    alert('ваш знак зодиака рыбы')
} else {
    alert('не знаю какой знак')
}




