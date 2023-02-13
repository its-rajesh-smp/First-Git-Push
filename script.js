const uName=document.querySelector(".name")
const email=document.querySelector(".email")
const aleartDialog=document.querySelector('#alert')
const canvas=document.querySelector(".canvas")
const noPerson=document.querySelector("#noPerson")
const help=document.querySelector(".help")




//! Grabing Data from Local Storage on windows load
window.addEventListener("load",()=>{
    //grabing keys from local storage Object
    var object=Object.keys(localStorage)    


    for(let i=0;i<localStorage.length;i++){
        let abc=localStorage.getItem(object[i])
        let bcd=JSON.parse(abc)
        let StorageName=bcd.UserName
        let StorageEmail=bcd.UserEmail


        let newRow=document.createElement("div") //Row
    newRow.classList.add("row","item")
    newRow.style="border: 1px solid black"

    let col1=document.createElement("div") //Col1
    col1.classList.add("col" ,"d-inline-flex" ,"align-items-center" ,"justify-content-center")
    col1.style="background-color: #9cd5c0"

    let buttonGrup=document.createElement('div')    //Btn Group
    buttonGrup.classList.add("btn-group" ,"btn-group-sm" ,"m-2" ,"gap-1")

    let bt1=document.createElement('button')    //Bt1
    bt1.classList.add("btn", "btn-sm" ,"btn-primary" ,"editBtn")
    bt1.innerText="EDIT"
    bt1.setAttribute("data-bs-toggle","modal")
    bt1.setAttribute("data-bs-target","#modal")
    buttonGrup.append(bt1)
    
    let bt2=document.createElement('button')    //Bt2
    bt2.classList.add("btn", "btn-sm" ,"btn-danger","deleteBtn")
    bt2.innerText="X"
    buttonGrup.append(bt2)
    col1.append(buttonGrup)


    let col2=document.createElement("div") //Col2
    col2.classList.add("col" ,"d-inline-flex" ,"align-items-center" ,"justify-content-center")
    col2.style="background-color: #cab172"
    col2.innerHTML=StorageName
    
    let col3=document.createElement("div") //Col3
    col3.classList.add("col" ,"d-inline-flex" ,"align-items-center" ,"justify-content-center")
    col3.style="background-color: #89b8d3"
    col3.innerHTML=StorageEmail
    
    
    
    newRow.append(col2)
    newRow.append(col3)
    newRow.append(col1)
    canvas.append(newRow)



    }
})













//! HELP

help.addEventListener("mouseover",(e)=>{
    document.querySelector(".alert").style="display: block;"
})
help.addEventListener("mouseout",(e)=>{
    document.querySelector(".alert").style="display: none;"
})






//! FOR ADD DATA
document.querySelector('#ADD').addEventListener("click",(e)=>{

    if(uName.value==="" || email.value===""){
        aleartDialog.style="visibility: visible;"
        return
    }

    // Blank Field Error
    aleartDialog.style="visibility: hidden;"

    if(localStorage.getItem(email.value)!=undefined){alert("Already Present");return }


    
    let newRow=document.createElement("div") //Row
    newRow.classList.add("row","item")
    newRow.style="border: 1px solid black"

    let col1=document.createElement("div") //Col1
    col1.classList.add("col" ,"d-inline-flex" ,"align-items-center" ,"justify-content-center")
    col1.style="background-color: #9cd5c0"

    let buttonGrup=document.createElement('div')    //Btn Group
    buttonGrup.classList.add("btn-group" ,"btn-group-sm" ,"m-2" ,"gap-1")

    let bt1=document.createElement('button')    //Bt1
    bt1.classList.add("btn", "btn-sm" ,"btn-primary" ,"editBtn")
    bt1.innerText="EDIT"
    bt1.setAttribute("data-bs-toggle","modal")
    bt1.setAttribute("data-bs-target","#modal")
    buttonGrup.append(bt1)
    
    let bt2=document.createElement('button')    //Bt2
    bt2.classList.add("btn", "btn-sm" ,"btn-danger","deleteBtn")
    bt2.innerText="X"
    buttonGrup.append(bt2)
    col1.append(buttonGrup)


    let col2=document.createElement("div") //Col2
    col2.classList.add("col" ,"d-inline-flex" ,"align-items-center" ,"justify-content-center")
    col2.style="background-color: #cab172"
    col2.innerHTML=uName.value
    
    let col3=document.createElement("div") //Col3
    col3.classList.add("col" ,"d-inline-flex" ,"align-items-center" ,"justify-content-center")
    col3.style="background-color: #89b8d3"
    col3.innerHTML=email.value
    
    
    
    newRow.append(col2)
    newRow.append(col3)
    newRow.append(col1)
    canvas.append(newRow)

    StoreDataInStorage(uName.value,email.value)
})







// !  FOR DELETE DATA
canvas.addEventListener("click",e=>{

    if(e.target.classList.contains("deleteBtn")){

        let save= e.target.parentElement.parentElement.previousSibling.innerText
        localStorage.removeItem(save)
        e.target.parentElement.parentElement.parentElement.remove()
    }
})

// !  FOR Search DATA
var search=document.querySelector("#search")
search.addEventListener("keyup",(e)=>{
    let store=search.value.toLowerCase()
    let itemList=document.querySelectorAll(".item")
    
    for(let i=0;i<itemList.length;i++){
       let Sname= itemList[i].children[0].innerText.toLowerCase()
       let Semail= itemList[i].children[1].innerText.toLowerCase()
       if(Sname.indexOf(store) != -1  || Semail.indexOf(store)!=-1 ){
        itemList[i].style.display="flex"
        
       }
       else{
        itemList[i].style.display="none"
       }
    }

})




//! Edit Data
canvas.addEventListener("click",e=>{

    if(e.target.classList.contains("editBtn")){
       
        // Item From Row
        var email=e.target.parentElement.parentElement.previousSibling.innerText
        var name=e.target.parentElement.parentElement.previousSibling.previousSibling.innerText
        
        // Model Show Item
        var modal_show_name=document.querySelector("#modal_name")
        var modal_show_email=document.querySelector("#modal_email")
        modal_show_name.textContent=name
        modal_show_email.textContent=email

        document.querySelector("#btn_modal_save").addEventListener('click',(item)=>{
            // Search Value
            let modelInputName=document.querySelector("#modal_inp_name").value  
            if(modelInputName==""){alert("Please Enter Something To Edit"); return;}
            StoreDataInStorage(modelInputName,email)
            e.target.parentElement.parentElement.previousSibling.previousSibling.innerText=modelInputName   //Changing Row Value
            modal_show_name.textContent=modelInputName  //Changing Modal Showcase Value
        })
    }
})


function StoreDataInStorage(name,email){
    let newData={
        UserName:name,
        UserEmail:email
    }
    localStorage.setItem(email,JSON.stringify(newData))
}