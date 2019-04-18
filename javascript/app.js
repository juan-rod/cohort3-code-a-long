// create a variable that equals your name
var myName = "juan rodriguez"

// console.log() that variable on the next line. open up the console in chrome inspector/dev-tools to see your variable
console.log('myName:', myName)
// create another variable that gives you access to the div with the class that equals 'name'
//  hint: to access your html document, use document.[insert method here] 
//  list of methods found here https://aca-web-8.herokuapp.com/_book/07Week/01DayPrep.html
// var nameDiv = document.getElementsByClassName('name')
// js way
// var nameDiv = document.querySelector('.name')
// jQuery way
var nameDiv = $('.name')
// console.log() that variable name and check the inspector to see if you got it
console.log('nameDiv', nameDiv)
// put the variable of your name inside the div with the class="name" using the method 'innerText'
// nameDiv.innerText = myName
nameDiv.append(myName)
// create a variable that gives you access to the div with the class that equals 'link-list'
let linkList = document.querySelector('.link-list')
// create a ul element
let ul = document.createElement('ul')
// append it to the link-list element
linkList.appendChild(ul)
// create an array
var links = ['Home', 'About', 'Projects', 'Contact']
// loop through array and append each to an li in the ul
links.forEach(item => {
  let li = document.createElement('li')
  li.innerText = item
  ul.appendChild(li)
})

// add class to navigation
var navElement = document.querySelector('nav')
navElement.classList.add('nav-styles')