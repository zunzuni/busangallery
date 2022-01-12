const mainTitle = document.querySelector('.main-title')
const header = document.querySelector('header')
const mainVisual = document.querySelector('.main-visual')
const mainVisualHeight = mainVisual.clientHeight
console.log(mainVisualHeight)
window.addEventListener('scroll',() => {
  mainTitle.style.top = `${45 + (window.scrollY / 17)}%`
  console.log(window.scrollY)
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


var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3
};

var map = new kakao.maps.Map(container, options);