"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./shared/model/task");
const addTaskToList = () => {
    const btnAdd = document.querySelector(".btn-add");
    if (btnAdd !== null) {
        btnAdd.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("hola");
            const values = getFormValue();
            const objTask = createTask(values);
            objTask.addTask(objTask);
            createTaskList(objTask);
        });
    }
};
const getFormValue = () => {
    const nodeElements = Array.from(document.querySelectorAll(".inputValue"));
    return nodeElements.map(e => e.value);
};
const createTask = (datas) => {
    let newTask = new task_1.Task(datas[0], datas[1], datas[2], datas[3]);
    return newTask;
};
const createTaskList = (obj) => {
    const list = document.querySelector(".task-list");
    if (!list)
        return;
    let liNodes = '';
    obj.tasks.forEach((e, i) => {
        liNodes +=
            `<li class="info">
          <span>${i}</span>
          <p>${e.name}</p>
          <p>${e.description}</p>
          <p>${e.timetable}</p>
          <p>${e.state}</p>
      </li>`;
    });
    list.innerHTML = liNodes;
};
const init = () => {
    addTaskToList();
};
window.addEventListener("load", init);
//# sourceMappingURL=index.js.map