// document.title = "New title"
// document.getElementById("main-header").style.borderBottom = "2px solid black";
// let title = document.querySelector("#main .title")
// title.style.fontWeight = "bold"
// title.style.color ="green"


// let li = document.getElementsByClassName("list-group-item");
// li[2].style.backgroundColor ="green"

// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight ="bold"
// }

// document.getElementsByTagName('li')[4].innerText = "Item changed"
// // document.getElementsByClassName('list-group-item')[4]
// let ql = document.querySelectorAll('.list-group-item')
// ql[1].style.background = "green"
// ql[1].style.display ="none"


let lists = document.querySelector("#items")
console.log(lists.parentElement)
console.log(lists.firstChild)
console.log(lists.lastChild)
lists.lastElementChild.textContent = 'last element child' 
lists.firstElementChild.textContent = 'first element child' 
document.querySelector('form input').setAttribute("value" , "items")
console.log(lists.previousElementSibling)

let newDiv = document.createElement('div')
newDiv.className = 'hello'
newDiv.id = 'hello1'

let textnode = document.createTextNode("Hello World")
newDiv.appendChild(textnode)

let container = document.querySelector('header .container')
let h1 = document.querySelector("#header-title")

container.insertBefore(newDiv , h1)
newDiv.style.fontSize ="30px"
console.log(newDiv.nextElementSibling)

h1.textContent = "Hello " + h1.textContent
console.log(h1.innerText)

lists.firstElementChild.textContent = "Hello " + lists.firstElementChild.textContent

















