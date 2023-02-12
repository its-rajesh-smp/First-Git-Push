const uName=document.querySelector(".name")
const email=document.querySelector(".email")
const aleartDialog=document.querySelector('#alert')
const canvas=document.querySelector(".canvas")
const noPerson=document.querySelector("#noPerson")
var count=1
const help=document.querySelector(".help")









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

    noPerson.style="visibility: hidden;"
    aleartDialog.style="visibility: hidden;"

    


    
    let newRow=document.createElement("div") //Row
    newRow.className="row"
    newRow.style="border: 1px solid black"

    let col1=document.createElement("div") //Col1
    col1.className="col"
    col1.style="background-color: #9cd5c0"
    col1.innerHTML=count
    newRow.append(col1)
    
    let col2=document.createElement("div") //Col2
    col2.className="col"
    col2.style="background-color: #cab172"
    col2.innerHTML=uName.value
    newRow.append(col2)
    
    let col3=document.createElement("div") //Col3
    col3.className="col"
    col3.style="background-color: #89b8d3"
    col3.innerHTML=email.value
    newRow.append(col3)

    canvas.append(newRow)
    count++

    // Storing INside local Storage
    localStorage.setItem(uName.value,email.value)
})


// !  FOR DELETE DATA
document.querySelector("#DEL").addEventListener("click",(e)=>{

    
    if(canvas.children[1]==undefined)
    {
        return
    }
    canvas.children[1].remove()
    if(canvas.children[1]==undefined){
        document.querySelector("#noPerson").style=" text-align: center; color: rgba(0, 0, 0, 0.283); visibility: visible;"
        count=1
    }

})


