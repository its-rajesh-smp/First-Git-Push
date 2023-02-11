var itemList=document.querySelector("#items")
//! ParantNode
// itemList.parentNode.style.backgroundColor="#0f0f0f3b"
// itemList.parentNode.parentNode.style.backgroundColor="#0f0f0f0b"

//! ParantElement -- Same As ParantNode
// itemList.parentElement.style.backgroundColor="green"
// itemList.parentElement.parentElement.style.backgroundColor="black"


//! ChildNodes -- Return us NodeList of inside nodes include text or linebreaks  
// console.log(itemList.childNodes)

//! children   -- Return us HTML collections
// console.log(itemList.children)

//! FirstChild
// console.log(itemList.firstChild) //?<-- Return us first child it could be an element or a text/linebreak
// console.log(itemList.firstElementChild) //?<-- It gives us first actual element

// console.log(itemList.lastChild) //?<-- Return us first child it could be an element or a text/linebreak
// console.log(itemList.lastElementChild) //?<-- It gives us first actual element

//! Siblings -- Brother
// console.log(itemList.nextSibling) //?<-- Return us the next sibling including linebreak and element
// console.log(itemList.previousSibling) //?<-- Return us the previous sibling including linebreak and element

// console.log(itemList.nextElementSibling) //?<-- Return us the next sibling element
// console.log(itemList.previousElementSibling) //?<-- Return us the previous sibling element




//! Creating New Element
var newDiv =document.createElement('div')
newDiv.className="hello"    //? Add class
newDiv.id="hello_ID"    //? Add Id
newDiv.setAttribute("title","Hi")    //? Add Attribute

//* Create A new Textnode
var newDivText=document.createTextNode("Hello World")
//* Add Text to our div
newDiv.appendChild(newDivText)




//! InsertBefore Item LIster
var container=document.querySelector(".container")
var h1=document.querySelector("#header-title")
container.insertBefore(newDiv,h1)






//! InsertBefore Item1
var newDiv1 =document.createElement('div')
newDiv1.className="hello"    //? Add class
newDiv1.id="hello_ID"    //? Add Id
newDiv1.setAttribute("title","Hi")    //? Add Attribute

//* Create A new Textnode
var newDivText1=document.createTextNode("Hello World")
//* Add Text to our div
newDiv1.appendChild(newDivText1)

var item1=document.querySelector(".list-group-item")
item1.parentElement.insertBefore(newDiv1,item1)