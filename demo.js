document.getElementById('main-header').style.borderBottom="5px solid black"
document.getElementsByClassName('title')[0].style.fontWeight="bold"
document.getElementsByClassName('title')[0].style.color="green"



document.getElementsByClassName("list-group-item")[2].style.backgroundColor="green"
for(let i=0;i<document.getElementsByClassName("list-group-item").length;i++){
    document.getElementsByClassName("list-group-item")[i].style.fontWeight="bold"

}


var newList=document.getElementsByClassName("newClass")
newList[0].style.paddingTop="0.75rem"
newList[0].style.paddingBottom="0.75rem"
newList[0].style.paddingLeft="1.25rem"
newList[0].style.listStyle="none"
newList[0].style.border="1px solid rgba(0,0,0,.125)"
newList[0].style.display="block"


// QuerySelector
var newList_tag=document.getElementsByTagName("li")
newList_tag[4].style.fontWeight="bold"


var secondItem=document.querySelector(".list-group-item:nth-child(2)")
secondItem.style.backgroundColor="green"

var thirdItem=document.querySelector(".list-group-item:nth-child(3)")
secondItem.style.visibility="hidden"


// QuerySelectorAll
secondItem=document.querySelectorAll(".list-group-item")
secondItem[1].style.color="green"


for(let i=0;i<secondItem.length;i++){
    if(i%2!=0){
        secondItem[i].style.backgroundColor="green"
    }
}