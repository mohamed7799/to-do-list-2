"use strict"
//var
let toDo = {
    submit: true,
    edit: false,
    editItem: "",
    setValues: function (sub, ed, it) {
        this.submit = sub;
        this.edit = ed;
        thiss.editItem = it;
    }
}

let input = document.getElementById("in-js");

let mode = document.getElementById("mode");

let list = document.getElementById('list');


//event listeners

list.addEventListener("click", (e) => {
    let p = e.target.parentElement.parentElement;
    if (e.target.classList.contains("delete")) {
        list.removeChild(p);
    }
    else if (e.target.classList.contains("edit")) {
        mode.innerText = "Edit";
        input.value = p.firstElementChild.innerText;
        toDo.setValues(false, true, p.firstElementChild);
    }
})

mode.addEventListener("click", () => {
    if (input.value !== "") {
        if (toDo.edit) {
            toDo.editItem.innerText = input.value;
            toDo.setValues(true, false, "");
            mode.innerText = "Submite";
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