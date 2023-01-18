const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 450 && positionY === 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move,1)
    } else if (positionX === 450 && positionY < 450) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move,1)
    } else if (positionY === 450 && positionX > 0) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move,1)
    } else {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move,1)
    }
}
move()

let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let showTime = document.getElementById('showTime');

startBtn.addEventListener('click', beginCounter);
stopBtn.addEventListener('click', stopCounter);

let sec = 0;
let interval;

function beginCounter() {
  interval = setInterval(count, 1000);

  function count(){
    sec++;
    showTime.innerHTML = sec;
  }
}

function stopCounter() {
  clearInterval(interval);
}




