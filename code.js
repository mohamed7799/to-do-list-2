"use strict"
//var
let toDo = {
    submit: true,
    edit: false,
    editItem: "",
    setValues: function (sub, ed, it) {
        this.submit = sub;
        this.edit = ed;
        this.editItem = it;
    }
}

let inputSub = document.getElementById("sub-in");

let inputSearch = document.getElementById("search-in");

let mode = document.getElementById("mode");

let list = document.getElementById('list');

//fun

let renderItems = (data) => {
    list.innerHTML = "";
    data.forEach(ele => {
        list.innerHTML += `<li class="list__item">
                    <p>${ele}</p>
                    <div class="icons">
                        <i class="fas fa-edit edit"></i>
                        <i  class="fas fa-trash-alt delete"></i>
                    </div>
                </li>`;
    })
}

//event listeners


inputSearch.addEventListener("keyup", () => {
    let tasks = [...list.getElementsByTagName("p")];
    let term = inputSearch.value;
    tasks.forEach((ele) => {
        let title = ele.textContent;

        if (title.toLowerCase().indexOf(term) != -1) {
            let temp = ele.parentElement;

            temp.style.display = "flex";
        }
        else {
            let temp = ele.parentElement;

            temp.style.display = "none";
        }
    })
})



list.addEventListener("click", (e) => {
    let p = e.target.parentElement.previousElementSibling;
    if (e.target.classList.contains("delete")) {
        deleteFromDB(p.innerText);
    }
    else if (e.target.classList.contains("edit")) {
        mode.innerText = "Edit";
        inputSub.value = p.innerText;
        toDo.setValues(false, true, p.innerText);
    }
})

mode.addEventListener("click", () => {
    if (inputSub.value !== "") {
        if (toDo.edit) {
            editToDB(toDo.editItem);
            toDo.setValues(true, false, "");
            mode.innerText = "Submite";
        }
        else {
            addToDB(inputSub.value);
        }
        inputSub.value = "";
    }

    else {
        alert("Please Enter a Task")
    }
})

//main

getDB();
