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




var newList_tag=document.getElementsByTagName("li")
newList_tag[4].style.fontWeight="bold"