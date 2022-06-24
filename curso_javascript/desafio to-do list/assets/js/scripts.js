const addWork = () =>{
    let textInputWrapper = document.querySelector('input').value;
    let textList = document.createTextNode(textInputWrapper);
    var tagInput = document.createElement("input");
    var tagP = document.createElement("p");
    tagP.appendChild(textList);
    tagInput.type = "checkbox";
    document.getElementById("toDoList").appendChild(tagInput);
    document.getElementById("toDoList").appendChild(tagP);
}

