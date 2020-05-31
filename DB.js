let db = firebase.firestore();

let tasksState = [];



let getDB = (doc) => {
    db.collection("tasks").doc(doc).get().then((doc) => {
        tasksState = doc.data().t;
        renderItems(tasksState);
    })

}

let removeFromArray = (arr, item) => {
    let ind = arr.indexOf(item);
    arr.splice(ind, 1);
}

let addToDB = (task, doc) => {

    tasksState.push(task);
    db.collection("tasks").doc(doc).set({
        t: tasksState
    })
    renderItems(tasksState);
}



let deleteFromDB = (task, doc) => {
    removeFromArray(tasksState, task);
    db.collection("tasks").doc(doc).set({
        t: tasksState
    })
    renderItems(tasksState);
}

let editToDB = (task, doc) => {

    let indOfChange = tasksState.indexOf(task);
    tasksState[indOfChange] = inputSub.value
    db.collection("tasks").doc(doc).set({
        t: tasksState
    })
    renderItems(tasksState);
}
