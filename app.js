function addItem() {

    // getting input value
    var itemVal = document.getElementById("item")

    // creating elements of table
    var trEle = document.createElement("tr");
    var valueTdEle = document.createElement("td");
    var editBtnTdEle = document.createElement("td");
    var deleteBtnTdEle = document.createElement("td");

    // creating button element
    var editBtnEle = document.createElement("button")
    var deleteBtnEle = document.createElement("button")

    editBtnEle.setAttribute("onclick","editRow(this)")
    deleteBtnEle.setAttribute("onclick","deleteRow(this)")
    
    var editBtnText = document.createTextNode("Edit")
    editBtnEle.appendChild(editBtnText)
    var deleteBtnText = document.createTextNode("Delete")
    deleteBtnEle.appendChild(deleteBtnText)

    
    editBtnTdEle.appendChild(editBtnEle)
    deleteBtnTdEle.appendChild(deleteBtnEle)

    valueTdEle.innerHTML = itemVal.value


    trEle.appendChild(valueTdEle)
    trEle.appendChild(editBtnEle)
    trEle.appendChild(deleteBtnEle)
    
    
    var dataContainer = document.getElementById("table");

    dataContainer.appendChild(trEle)


    itemVal.value = ""

}

function deleteAll() {
    var dataContainer = document.getElementById("table");
    dataContainer.innerHTML = ""
}

function deleteRow(e){
    e.parentNode.remove()
}

function editRow(e){
    var editableItem = e.previousSibling.innerHTML;

    var updatedItem = prompt("Update Your Value", editableItem)

    if(updatedItem == ""){
        alert("Empty! no changes saved")
    }else{
        e.previousSibling.innerHTML = updatedItem
    }
}
