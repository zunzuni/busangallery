const mainTitle = document.querySelector('.main-title')
const header = document.querySelector('header')
const mainVisual = document.querySelector('.main-visual')
const mainVisualHeight = mainVisual.clientHeight
window.addEventListener('scroll',() => {
  mainTitle.style.top = `${45 + (window.scrollY / 17)}%`
  if (window.scrollY >= mainVisualHeight) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

//main visual text

const hamBtn = document.querySelector('.ham-btn')
const lnb = document.querySelector('.lnb')
const circle = document.querySelector('.circle')
hamBtn.addEventListener('click',() => {
  hamBtn.classList.toggle('clicked')
  lnb.classList.toggle('clicked')
  circle.classList.toggle('clicked')
})
//ham-htn

const child = document.querySelector('.child')
const childValue = document.querySelector('.child-value')
const adult = document.querySelector('.adult')
const adultValue = document.querySelector('.adult-value')
const date = document.querySelector('.date')
const dateValue = document.querySelector('.date-value')
const money = document.querySelector('.money')

function book(input, result) {
  input.addEventListener('change', () => {
    result.textContent = input.value
  })
}

const humanInput = document.querySelectorAll('.human-input')
humanInput.forEach(element => {
  element.addEventListener('change',() => {
    money.textContent = child.value*6000 + adult.value*8000
  })
});

book(child,childValue)
book(adult,adultValue)
book(date,dateValue)


//book 

var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(35.10932752392788, 128.94275361474251),
  level: 3
};

var map = new kakao.maps.Map(container, options);

//kakao map api