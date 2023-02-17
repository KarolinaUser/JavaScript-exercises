/* eslint-disable */  

//PROJEKT 1
// const arrowBtn = document.querySelector('.arrow')
// const arrowIcon = document.querySelector('.fas')
// const img = document.querySelector('.item1')

// const showImg = () => {
//    img.classList.toggle('hide')

//    if(img.classList.contains('hide')) {
//       arrowIcon.style.transform = 'rotate(180deg)'
//    } else {
//       arrowIcon.style.transform = 'rotate(0)'
//    }
// } 

// arrowBtn.addEventListener('click', showImg)

//PROJEKT 2

const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const par = document.querySelector('p')

let fontSize = 36


const sizeBig = () => {
 fontSize += 5
 par.style.fontSize =  fontSize + 'px'
}

const sizeSmall = () => {
   if(fontSize <= 21){
      return
   }
   fontSize -= 5
   par.style.fontSize = fontSize + 'px'
   
}


const colorChange = () => {
   const r = Math.floor(Math.random() * 255)
   const g = Math.floor(Math.random() * 255)
   const b = Math.floor(Math.random() * 255)

   par.style.color = `rgb(${r}, ${g}, ${b})`
}

sizeUp.addEventListener('click', sizeBig)

sizeDown.addEventListener('click', sizeSmall)

colorBtn.addEventListener('click', colorChange)