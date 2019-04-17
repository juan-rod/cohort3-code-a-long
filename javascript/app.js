// create a variable that equals your name
var myName = 'Juan Rodriguez'
// console.log() that variable on the next line. open up the console in chrome inspector/dev-tools to see your variable
console.log(myName)
// create another variable that gives you access to the div with the class that equals 'name'
//  hint: to access your html document, use document.[insert method here] 
//  list of methods found here https://aca-web-8.herokuapp.com/_book/07Week/01DayPrep.html
var nameDiv = document.querySelector('.name')
// console.log() that variable name and check the inspector to see if you got it
console.log('nameDiv', nameDiv)
// put the variable of your name inside the div with the class="name" using the method 'innerText'
nameDiv.innerText = myName
// create a variable that gives you access to the div with the class that equals 'link-list'
var linkList = document.querySelector('.link-list')
var ul = document.createElement('ul')
var li = document.createElement('li')
linkList.append(ul)
ul.append(li)

