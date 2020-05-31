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

let authBtns = document.getElementById("auth-js");

let logModel = document.getElementById("log-model-js");

let signModel = document.getElementById("sign-model-js")

let logForm = document.getElementById("log-form");

let signForm = document.getElementById("sign-form");

let userID = "";

let userName = document.getElementById("user-js");
