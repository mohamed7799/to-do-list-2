"use strict"

let input = document.getElementById("in-js");

let mode = document.getElementById("mode");

let list = document.getElementById('list');


list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        console.log(e.parentElement);
        let p = e.target.parentElement.parentElement;
        list.removeChild(p);
    }
})

mode.addEventListener("click", () => {
    if (input.value !== "") {
        list.innerHTML += `<li class="list__item">
                    <p>${input.value}</p>
                    <div class="icons">
                        <i class="fas fa-edit edit"></i>
                        <i class="fas fa-trash-alt delete"></i>
                    </div>
                </li>`;
        input.value = "";
    }


    else {
        alert("Please Enter a Task")
    }
})