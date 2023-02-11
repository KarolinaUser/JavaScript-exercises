/* eslint-disable */  
// console.log('hej');

// //możemy dodać jakąś wartosć bo jest let
// let ageTest = 33;
// console.log(ageTest);

// ageTest =22;
// console.log(ageTest);

// //tylko jedna wartość - zmienna stała const 
// const hobby = 'travel';
// console.log(hobby)

// // możemy mieć dwie takie same zmienne, bo jest var 
// var name = ('Karolina')
// var name = ('Karolina')
// console.log(name)

// //ćwiczenie template string 2 sposoby
// const firstNameMy = 'Karolina';
// let myAge = 34

// console.log('hej jestm ' + firstNameMy + 'i mam obecnie '  + myAge + ' lata');
// console.log(`hello jestm ${firstNameMy} i mam obecnie ${myAge} lata`);

// //test - znajdź 6 błędów i popraw 

// const firstName = 'Tomek' 
// let age = 12
// age = 18
 
// const favColor = 'niebieski'  //uzycie var 
// const fav_meal = 'schabowy'  //uzycie myslnika
 
// let currentCar // uzycie kropki 
// currentCar = 'Audi' //uzycie kropki 
 
// let firstName2 = 'Ania' //uzycie dwa razy tej samej zmiennej 
// let age2 = 24
// let favColor2 = 'czerwony' // polska nazwa zmiennej

// //TYPY DANYCH

// const pet = 'dog'  
// console.log(typeof pet);

// //metody i właściwości do stringów

// const msg = 'hello word'
// console.log(msg.length); 

// //przykłady metod:

// const Newmsg = 'hello word';                                                                                                                       
// console.log(Newmsg.toUpperCase()) 

// const date = new Date();
// console.log(date.toLocaleDateString('pl'));
// console.log(date.toLocaleDateString('en'));

// const userName = 'tomek'

// const newUserName = userName.charAt(0).toUpperCase() + userName.slice(1);

// //console.log(userName.slice(1))

//  console.log(newUserName)

//  //TEST 2 WYKONAC POLECENIA Z UDEMY

//  //powiększ text

//  const text1 = 'powieksz mnie';
//  console.log(text1.toUpperCase());

//  const text2 = 'ZAPISZ MNIE MALYMI LITERAMI'
//  console.log(text2.toLowerCase());

//  const text3 = '$#%#^ wytnij te dziwne znaki na poczatku!'
//  console.log(text3.slice(6))

//  const text4 = 'sprawdź, czy zawieram słowo "czy"'
//  console.log(text4.includes('czy'))
 
//  const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
//  console.log(text5.charAt(2));

//  const text6 = 'pies zamien kazde slowo pies, na slowo kot pies'
//  console.log(text6.replaceAll('pies','kot'));

//  const text7 = 'podziel, ten, string, od, przecinkow'
//  console.log(text7.split(','))

//  //typ number przykłady

//  const numb = '123' //podaje number typu string

//  console.log(parseInt(numb)) //zamieniam stringa w number 



//OPERATORY WARUNKOWE 
//sprawdzamy czy hasło jest wieksze niz 10 - jesli nie to wyswietl ELSE 

//  const pass = ('abc8!hhvhvhhvhh');

//  if(pass.length > 10 && pass.includes('!')) {
//   console.log('Masz rewelacyjne hasło');
//  }
//  else if (pass.length > 10) {
//     console.log('Masz dobre haslo');
// }  else  {
//     console.log('Masz za krotkie hasło');
// } 

// const x = 50
// const y = 30 

// if(x > y) {
//     console.log(`${x} > ${y}`)
// }

// const color = 'blue';

// const newColor = 'green'

// if(color === newColor) {
//   console.log('kolory sie zmieniaja')
// } else {
//     console.log('kolory sie nie zmieniaja')
// }

// const x = 100;
// const y = 100;

// if(x > y ) {
//     console.log('x>y');
// } else if(x === y) {
//   console.log('x = y')
// } else{
//     console.log('x < y')
//  }

//  //switch

//  const promo = '20%'

//  switch(promo) {
//     case '10%':
//     console.log('10%')
//     break

//     case '20%':
//         console.log('20%')
//         break

//         case '30%':
//             console.log('30%')
//             break

//             default: 
//             console.log('inna')
//  }

// const x  = 10

// const check = (10 % 2 === 0) ? 'x jest parzyste' : 'x nie jest parzyste'

// console.log(check)

// const x = 30

// let text // powiekszy nam tekst wywołany w consoli / mozna tez dodadac do kazdego consol loga osobno 

// if(x >= 100) {
//    text = 'x > 100'
// } else if( x < 100 && x > 30 ) {
//    text = 'x jest sredniakiem'
// } else { 
//    text = 'x jest maly'
// }

// console.log(text.toUpperCase());

// PETLE!!

// const color = ['red', 'grean', 'orange', 'blue'];

// for( let i = 0; i < color.length; i++) {
//     console.log(color[i])
// }

// const city = ['Krakow', 'Rabka', 'Zakopane', 'Pinczow']

// for( let i= 0; i < city.length; i++) {
//      console.log(`to miasto nazywa sie ${city[i]}`)
// }

//zwiekszamy o 2 
// let x = 0 

// while(x < 10){
//  // x = x + 2  lub 
//   x +=2
//   console.log(x)
// }

// let x = 20 

// do{x = x - 3 }
//  while(x > 0) {
// }

// console.log(x)

//  let numbers = [ 5, 8, 10,23,48,60]

//  for(let number of numbers) {
//       console.log(number / 5)

//  }

//  for(let number of numbers) {
//     console.log(number / 5)

//     if(number % 2 === 0){
//       console.log(`liczby parzyste: ${number}`)
//     } else 
//     console.log(`liczby nieparzyste: ${number}`)
// }




//TABLICE

// const test = [];

// test.push('jeden', ' dwa') 
// console.log(test)

// test.unshift('start')
// console.log(test)

// test.pop()
// console.log(test)

// test.shift(test)
// console.log(test)



//zadanie do zrobienia 
// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0, 2)

// console.log(numbers2)

// const numbers3 = numbers.slice(-3)

// console.log(numbers3)

// const randomStuff = colors.splice(3, 2)

// console.log(colors)
// console.log(randomStuff)

// const carsNew = cars.splice(2,4, 'nowy element')

// console.log(cars)

// console.log(carsNew)

// const letters = ['c', 'd']

// letters.unshift('a', 'b')
// letters.push('e', 'f')



// console.log(letters)
// console.log(letters.includes('c'))

//zadanie

// const numbers = [1,2,3,4]

// const food = ['eggs', 'pizza', 'burger', 'salat']

// const newArray = [...numbers, ...food]

// console.log(newArray)

// //lub

// const newArray2 = numbers.concat(food)

// console.log(newArray2)

// let numbers = [1,5,13,26,48]

// let newnumber = numbers.map(dowolnaNazwa => dowolnaNazwa * 5)

// console.log(newnumber)

// for (const dowolnaNazwa of newnumber){
// if(dowolnaNazwa % 2 === 0){
//     (console.log(`liczby parzyste:${dowolnaNazwa}`))
// } else { console.log(`liczby nieparzyste: ${dowolnaNazwa}`)}
// }

// let color = ['turkus']

// color.unshift('red')

// color.push('blue')

// for(let i = 0; i < color.length; i++){
//     console.log(`mojulubiony kolor to: ${color[i].charAt(0).toUpperCase() + color[i].slice(1)}`)
// }


// const cars = 'Audi, BMW, Mercedes, Nissan, Dodge'

// const carArr = cars.split(', ')

// carArr.length > 3 ? console.log('jest OK') : console.log('nie jest OK')

// if(carArr.includes('Audi')){
//   carArr.push('Lanborghini')
// } else {
//     carArr.pop()
// }

// console.log(carArr)

//FUNKCJE

// function testowa(name, age) {
//     console.log(`moje imie: ${name} a moj wiek ${age}`)
// }

// testowa('Karolina', 20) 

//funkcja strzałkowa - przykłady 

//dwa parametry

// const strzalkowaFunkcja = (x, y) => {
//    console.log(x + y)
// }
// strzalkowaFunkcja(5,2)

// //jeden paramentr 

// const strzalka = (name) => console.log(name)

// strzalka('Karolina')

// //z return

// const uzyciem Return = (car1, car2) => {
//     console.log(car1, car2)
//     return car1, car2
// }

// uzycieReturn('Audi', 'BMW')

// //z tablicą 

// const tablica = ['a', 'b', 'c']

// const funkcja = tablica.forEach(function(nowaFunkcja) {
//     console.log(nowaFunkcja)
// })

// let score 

//  const add = (x, y) => {
//    score = x + y

//    if(score % 2 == 0){
//     parzysta()
//    } else niePrzysta()
// }

// const przysta = () => {
//    console.log(`wynik ${score} jest parzysty`)
// }

// const niePrzysta = () => {
//     console.log(`wynik ${score} jest nieparzysty`)
//  }

// add(5,2)

// let celsius 

// let temp 

// const fahrenheit = (c) => {
//     celsius = c
//     temp = celsius * 1.8 +32

//     console.log(`${c} C jest równie ${temp} F` )
// }

// fahrenheit(20)

// // zadanie 

// let num = 10 
// let numbers = []

// for(let i = 0; i < num; i++){
//   numbers.push(i)
// }

//  const checkNumbers = (numberek) => {
//     if(numberek % 3 === 0 && numberek !== 0){
//         console.log(`${numberek} jest podzielne przez 3`)
//     } else {
//         console.log(`${numberek} nie jest podzielny przez 3`)
//     }
// }

// numbers.forEach(checkNumbers)

//DOM / WIDNOWS /DOCUMENT

// const heading = document.querySelector('h1')

// console.log(heading)

// const ulList = document.createElement('ul')
// const liList = document.createElement('li')
// liList.textContent = 'hej'
// console.log(liList)

// document.body.appendChild(ulList)

// ulList.appendChild(liList)

// const div = document.querySelector('div')
// const par = document.createElement('p')

// div.appendChild(par)

// function addText(x,y){
//     console.log(`mam na imie ${x} i mam ${y}lat`)
// }

// addText('Karolina', 15)

// const days = ['pon', 'wto', 'sro']

// const days2 = days.forEach( day => console.log(day))


//ZADANIE: stworzyć zmienną score potem funkcje add, nastepnie inne dwie funkcje  i zgodnie z wynikiem je wyswietlić 

// let score 

// const add = (x,y) => {
// score = x + y
// if(score % 2 === 0){
//    funkcjaJeden()
// } else {
//     funkcjaDwa()
// }
// }

// const funkcjaJeden = () => {
//     console.log(`liczba ${score} jest parzysta`)
// }

// const funkcjaDwa = () => {
//     console.log(`liczba ${score} jest nieparzysta`)
// }

//    add(10,1)  //wywołanie funkcji 

   //DOM DOCUMENT WINDOW 

   //pobieranie by name 

//    const getName = document.getElementsByClassName('className')

//    console.log(getName)

   //zadanie pobrac wszystkie elementy do zmiennych 

// const heading = document.querySelector('h1')

// console.log(heading)

// const paragraf = document.querySelectorAll('p')

// console.log(paragraf)

//ZADANIR TWORZENIE ELEMENTÓW 


// const ulItem = document.createElement('ul')

// const liItem = document.createElement('li')

// liItem.textContent ='czesc'

// document.body.appendChild(ulItem)

// ulItem.appendChild(liItem)

// const getDiv = document.querySelector('div')

// const paragraf = document.createElement('p')

// getDiv.appendChild(paragraf)

//ZADANIE Z EVENT LISTENER 

// const btn3 = document.querySelector('.btn-3')

// const test = () => {
//     console.log('duble click')
// }

// btn3.addEventListener('click', test)

// const gold = document.querySelector('.gold')

// const nevCircle = document.createElement('div')

// gold.append(nevCircle)

//zadanie z listy 


// const ulList = document.createElement('ul') 
// document.body.append(ulList)

// const number = 10

// for( let i = 1; i <= number; i++){
//   const liItem = document.createElement('li')
//   liItem.textContent = i
//   ulList.append(liItem)
// }

//ZADANIE 2 + HTML 

// const p1 = document.querySelector('.p1')
// const p2 = document.querySelector('.p2')

// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')

// const divSqare = document.querySelector('.square')

// const f1 = () => {
//     console.log('hej')
// }

// const f2 = () => {
//    divSqare.style.background = 'tomato'
// }

// const f3 = () => {
//     divSqare.style.background = 'royalblue'
//  }

//  const f4 = () => {
//     p1.classList.toggle(show)
//     p2.classList.toggle(show)
//  }

//  btn1.addEventListener('dblclick', f1)
//  divSqare.addEventListener('mouseenter', f2)
//  divSqare.addEventListener('mouseleave', f3)
//  btn2.addEventListener('click', f4)

//ZADANIA Z POZOSTAŁYCH 

// const image = document.querySelector('img')

// image.setAttribute('src', 'http://unsplash.it/600/400')
// image.setAttribute('alt', 'losowy obraz')

// const test = () => {
//    console.log('wywołana po 2 sek')
// }

// setTimeout(test, 2000)

//ZADANIE 2 POZOSTAŁE 

const allLIelement = document.querySelectorAll('li')

let number = 1 

//pierwszy sposób z of

// for(const liItems of allLIelement){
//     liItems.textContent = number
//     liItems.dataset.id = number
//     number++
// }

//drugi sposób sam for 

for( let i = 0; i < allLIelement.length; i++ ) {
   allLIelement[i].textContent = number
   allLIelement[i].dataset.id = number
   number++

}

const thirdLi = document.querySelector('[data-id = "3"]')

console.log(thirdLi.closest('.wrapper'))