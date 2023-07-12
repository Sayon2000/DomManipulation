document.title = "New title"
document.getElementById("main-header").style.borderBottom = "2px solid black";
let title = document.querySelector("#main .title")
title.style.fontWeight = "bold"
title.style.color ="green"


let li = document.getElementsByClassName("list-group-item");
li[2].style.backgroundColor ="green"

for(let i=0;i<li.length;i++){
    li[i].style.fontWeight ="bold"
}

document.getElementsByTagName('li')[4].innerText = "Item changed"
// document.getElementsByClassName('list-group-item')[4]
