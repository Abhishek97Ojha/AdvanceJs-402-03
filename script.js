function addItem() {
    let inputItem = document.getElementById("inputItem").value;
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let div = document.createElement("div");
    let p = document.createElement("span");
    let items = document.getElementById("items");
    items.style.width = "30vw";
    if (inputItem == "") {
        alert("Please Input Item")
    }
    else {
        p.innerText = inputItem;
        let button = document.createElement("button");
        button.innerText = "Delete";
        button.style.marginLeft = "10px";
        button.addEventListener("click", deleteItem);
        div.appendChild(p);
        div.appendChild(button);
        li.appendChild(div);
        ul.appendChild(li);
        items.appendChild(ul);
    }
    function deleteItem() {
        li.remove();
    }
    document.getElementById("inputItem").value = "";
}