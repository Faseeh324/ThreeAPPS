var list = document.getElementById("list")



function  addtodo(){
 var todoAPP =   document.getElementById("Todo item")

//create list tag and Add button
 var listapp = document.createElement('li')
 var createtext = document.createTextNode(todoAPP.value)
listapp.appendChild(createtext)



//create delete button
var dletebtn = document.createElement("button")
var btntext  = document.createTextNode("Delete")
dletebtn.appendChild(btntext)
listapp.appendChild(dletebtn)
dletebtn.setAttribute("class", "btn")
dletebtn.setAttribute("onclick", "deletebtn(this)")

//create edit Button
var editbtn  = document.createElement("button")
var editText  = document.createTextNode("Edit")
editbtn.appendChild(editText)
editbtn.setAttribute("onclick","editbtn(this)")
listapp.appendChild(editbtn)



todoAPP.value = ""





list.appendChild(listapp)


// console.log(listapp)


}







function deletebtn(e){
    e.parentNode.remove() 
}

function deleateall(){
    list.innerHTML= ""
}

function editbtn(e){
     var fas = e.parentNode.firstChild.nodeValue;
     var edtvalue = prompt("enter Edt Value",fas)
     e.parentNode.firstChild.nodeValue = edtvalue

}
