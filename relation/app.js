//Recomend to use elements and not the nodes to explore the DOM
//if you just want to focus on the visual elements

//get the parent element
let list = document.querySelector('ul')
list.parentElement
list.parentNode

//get the child elements
list.childNodes
list.firstChild
list.lastChild

list.children
list.firstElementChild
list.lastElementChild

//get the siblings element
list.nextSibling
list.previousSibling

list.nextElementSibling
list.previousElementSibling