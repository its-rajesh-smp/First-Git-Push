var list=document.querySelector("#items")
var form=document.querySelector("#addForm")
var deleteBtn=document.querySelector(".delete")

// Create New Li After Click Submit
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var input=document.querySelector("#item").value;
    createNewLi(input)

})



// Delete The User
list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
    e.target.parentElement.remove()
    }
})




// Edit The User








// Function To Create New Li
function createNewLi(str){
    var newLi=document.createElement('li')
    var newBtn=document.createElement('button')

    newLi.classList.add("list-group-item")
    newLi.innerText=str

    newBtn.classList.add("btn", "btn-danger" ,"btn-sm" ,"float-right", "delete")
    newBtn.innerText="X"

    newLi.append(newBtn)
    list.appendChild(newLi)
}