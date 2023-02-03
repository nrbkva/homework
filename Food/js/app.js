const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
                j = 1
            }
        })
    }
}

let j = 0
function sliderAuto() {
    setInterval(() => {
        j++
        if (j > 3) {
            j = 0
        }
        hideTabContent()
        showTabContent(j)
    }, 2000)
}
sliderAuto()

let counter = 1;
  setInterval(function(){
  document.querySelectorAll('tabheader__item' + counter).checked = true;
  counter++;
  if(counter > 4){
  counter = 1;
  }
  }, 1000);

  counter ()

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

modal.onclick = (event) => event.target === modal ? closeModal() : false
window.onkeydown = (event) => event.code === 'Backspace' ? closeModal() : false

const footerModal = () => {
    const scroll = document.documentElement
    if (scroll.scrollTop + scroll.clientHeight >= scroll.scrollHeight - 0.8) {
        openModal()
        document.body.style.overflow = 'hidden'
    }
}
window.addEventListener('scroll', footerModal)

// data
const deadline = '2023-02-25'

function getTimerRemaining (deadline) {
      const t = new Date (deadline) - new Date(),
          days = Math.floor((t / (1000 * 60 * 60 * 24))),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60 )
    return {
          "total": t,
          "days": days,
          "hours": hours,
        "minutes": minutes,
        "seconds":seconds,
    }
}

function setClock(element, deadline) {
      const elem = document.querySelector(element),
          days = elem.querySelector('#days'),
          hours = elem.querySelector('#hours'),
          minutes = elem.querySelector('#minutes'),
          seconds = elem.querySelector('#seconds')

}





//post data

const forms = document.querySelector('form')
const postData = (form) => {
      form.addEventListener('submit', () => {

      })
}