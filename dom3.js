var list=document.querySelector("#items")
var form=document.querySelector("#addForm")
var deleteBtn=document.querySelector(".delete")
var filter=document.querySelector("#filter")

// Create New Li After Click Submit
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var input=document.querySelector("#item").value;
    var details=document.querySelector("#details").value;
    createNewLi(input,details)

})



// Delete The User
list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
    e.target.parentElement.remove()
    }
})




// Search Items
filter.addEventListener("keyup",(e)=>{
    var store=filter.value.toLowerCase().replace(" ","")
    
    /* 
    var find=document.querySelectorAll(".list-group-item")
    for(let i=0;i<find.length;i++){
        let save=find[i].firstChild.textContent.toLowerCase()
        if(store==save){console.log("MilGeya")}
    }
    */

   var itemList=document.getElementsByTagName('li')


    for(let i=0;i<itemList.length;i++){
        let temp=itemList[i].firstChild.textContent.toLowerCase().replace(" ","")
        let temp2=itemList[i].childNodes[1].textContent.toLowerCase().replace(" ","")
        if(temp.indexOf(store) != -1 || temp2.indexOf(store)!=-1 ){
            itemList[i].style.display="block"
        }
        else{
            itemList[i].style.display="none"
        }
    }

    //! Convert To An Array
    // Array.from(itemList).forEach((e)=>{
    //     var itemName=e.firstChild.textContent.toLowerCase().replace(" ","")
    //     if(itemName.indexOf(store) != -1){
    //         e.style.display="block"
    //     }
    //     else{
    //         e.style.display="none"
    //     }
    // })


})








// Function To Create New Li
function createNewLi(str,text){
    var newLi=document.createElement('li')
    newLi.classList.add("list-group-item")
    
    var newBtn=document.createElement('button')
    newBtn.classList.add("btn" ,"btn-danger" ,"btn-sm" ,"float-right", "delete")
    newBtn.textContent="X"

    var newBtn2=document.createElement("button")
    newBtn2.classList.add("btn" ,"btn-outline-info" ,"btn-sm" ,"float-right", "edit","mr-2")
    newBtn2.textContent="EDIT"

    let nodeName=document.createTextNode(str)
    let nodeText=document.createTextNode(" "+text)

    newLi.appendChild(nodeName)
    newLi.appendChild(nodeText)
    newLi.appendChild(newBtn)
    newLi.appendChild(newBtn2)

    list.appendChild(newLi)
}