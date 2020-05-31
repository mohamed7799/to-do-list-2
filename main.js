"use strict"

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
        deleteFromDB(p.innerText, userID);
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
            editToDB(toDo.editItem, userID);
            toDo.setValues(true, false, "");
            mode.innerText = "Submite";
        }
        else {
            addToDB(inputSub.value, userID);
        }
        inputSub.value = "";
    }

    else {
        alert("Please Enter a Task")
    }
})

authBtns.addEventListener('click', e => {
    e.stopPropagation();
    if (e.target.id === "log-in") {
        logModel.classList.remove("hide");
    }
    else if (e.target.id === "log-out") {
        auth.signOut().then(() => { })
    }
    else if (e.target.id === "sign-up") {
        signModel.classList.remove("hide");
    }
})


document.addEventListener("click", e => {
    if (e.target !== logForm && !logForm.contains(e.target)) {
        logModel.classList.add("hide");
    }
    if (e.target !== signForm && !signForm.contains(e.target)) {
        signModel.classList.add("hide");
    }
})

//main

