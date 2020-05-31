let auth = firebase.auth();

//sign up

signForm.addEventListener("submit", e => {
    e.preventDefault();

    let email = signForm["sign-email"].value;
    let pass = signForm["sign-pass"].value;

    auth.createUserWithEmailAndPassword(email, pass).then(cred => {
        signModel.classList.add("hide");
        signForm.reset();
        userID = cred.user.uid
    })
})

//log in
logForm.addEventListener("submit", e => {
    e.preventDefault();
    let email = logForm["log-email"].value;
    let pass = logForm["log-pass"].value;
    auth.signInWithEmailAndPassword(email, pass).then(cred => {
        logModel.classList.add("hide");
        logForm.reset();
    })
})

//chech the auth state

auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById("log-in").classList.add("hide");
        document.getElementById("sign-up").classList.add("hide");
        document.getElementById("log-out").classList.remove("hide");
        userName.innerText = user.email;
        userName.classList.remove("hide");
        userID = user.uid;
        getDB(userID);
    }
    else {
        document.getElementById("log-in").classList.remove("hide");
        document.getElementById("sign-up").classList.remove("hide");
        document.getElementById("log-out").classList.add("hide");
        userName.innerText = "";
        userName.classList.add("hide");
        userID = "";
        tasksState = [];
        renderItems(tasksState);
    }
})