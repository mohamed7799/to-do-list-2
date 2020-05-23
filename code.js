"use strict"

let toDo = {
    submit: true,
    edit: false,
    editItem: ""
}

let input = document.getElementById("in-js");

let mode = document.getElementById("mode");

let list = document.getElementById('list');


list.addEventListener("click", (e) => {
    let p = e.target.parentElement.parentElement;
    if (e.target.classList.contains("delete")) {
        console.log(e.parentElement);

        list.removeChild(p);
    }
    else if (e.target.classList.contains("edit")) {
        mode.innerText = "Edit";
        input.value = p.firstElementChild.innerText;
        toDo.editItem = p.firstElementChild;
        toDo.edit = true;
        toDo.submit = false;
    }
})

mode.addEventListener("click", () => {
    if (input.value !== "") {
        if (toDo.edit) {
            console.log(toDo.editItem);
            console.log(input.value);
            toDo.editItem.innerText = input.value;
            toDo.editItem = "";
            toDo.edit = false;
            toDo.submit = true;
            mode.innerText = "Submite";
            console.log(toDo)
        }
        else {
            list.innerHTML += `<li class="list__item">
                    <p>${input.value}</p>
                    <div class="icons">
                        <i class="fas fa-edit edit"></i>
                        <i class="fas fa-trash-alt delete"></i>
                    </div>
                </li>`;

        }
        input.value = "";
    }


    else {
        alert("Please Enter a Task")
    }
})