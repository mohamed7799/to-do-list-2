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

let db = firebase.firestore();

let inputSub = document.getElementById("sub-in");

let inputSearch = document.getElementById("search-in");

let mode = document.getElementById("mode");

let list = document.getElementById('list');


//fun

let renderItem = (item, value, id) => {
    item.innerHTML += `<li class="list__item">
                    <p id=${id}>${value}</p>
                    <div class="icons">
                        <i class="fas fa-edit edit"></i>
                        <i  class="fas fa-trash-alt delete"></i>
                    </div>
                </li>`;
}


let getDB = () => {
    db.collection("tasks").get().then((snap) => {
        snap.docs.forEach((doc) => {
            renderItem(list, doc.data().task, doc.id);
        })
    })

}


let addToDB = (task) => {

    db.collection("tasks").add({
        task: task
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            return docRef.id;
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
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
    let id = p.id;
    if (e.target.classList.contains("delete")) {
        db.collection("tasks").doc(id).delete();
        list.removeChild(p);
    }
    else if (e.target.classList.contains("edit")) {
        mode.innerText = "Edit";
        inputSub.value = p.innerText;
        toDo.setValues(false, true, p);
    }
})

mode.addEventListener("click", () => {
    if (inputSub.value !== "") {
        if (toDo.edit) {
            toDo.editItem.innerText = inputSub.value;
            db.collection("tasks").doc(toDo.editItem.id).set({ task: inputSub.value });
            toDo.setValues(true, false, "");
            mode.innerText = "Submite";
        }
        else {
            let id = addToDB(inputSub.value);
            renderItem(list, inputSub.value, id);
        }
        inputSub.value = "";
    }

    else {
        alert("Please Enter a Task")
    }
})

//main

getDB();

