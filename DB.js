let db = firebase.firestore();

let tasksState = [];



let getDB = () => {
    db.collection("tasks").doc("task").get().then((doc) => {
        tasksState = doc.data().tasks;
        renderItems(tasksState);
    })

}

let removeFromArray = (arr, item) => {
    let ind = arr.indexOf(item);
    arr.splice(ind, 1);
}

let addToDB = (task) => {
    tasksState.push(task);
    db.collection("tasks").doc("task").set({
        tasks: tasksState
    })
    renderItems(tasksState);
}

let deleteFromDB = (task) => {
    removeFromArray(tasksState, task);
    db.collection("tasks").doc("task").set({
        tasks: tasksState
    })
    renderItems(tasksState);
}

let editToDB = (task) => {

    let indOfChange = tasksState.indexOf(task);
    tasksState[indOfChange] = inputSub.value
    db.collection("tasks").doc("task").set({
        tasks: tasksState
    })
    renderItems(tasksState);
}
