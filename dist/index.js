import { Task } from "./shared/model/task";
import { TaskStatus as Status } from "./shared/model/taskStatus";
let intanceObj;
const createTask = (datas) => {
    if (datas === undefined)
        throw new Error("datas is undefined");
    intanceObj = Task.createInstanceNewObject(datas[0], datas[1], datas[2], datas[3]);
    return intanceObj;
};
const addTaskToList = () => {
    const btnAdd = document.querySelector(".btn-add");
    if (btnAdd !== null) {
        btnAdd.addEventListener("click", (event) => {
            event.preventDefault();
            const values = getFormValue();
            const objTask = createTask(values);
            objTask.addTask(objTask);
            createTaskList(objTask);
        });
    }
};
const getFormValue = () => {
    try {
        const nodeElements = Array.from(document.querySelectorAll(".inputValue"));
        if (nodeElements.length > 4) {
            throw new Error("No se cumplen los campos del formulario");
        }
        const arrValues = nodeElements.map((e, i) => {
            if (i === 0) {
                return e.value.toLowerCase();
            }
            return e.value;
        });
        return arrValues;
    }
    catch (e) {
        console.error('Error: ', e.message);
        return [];
    }
};
const createTaskList = (obj) => {
    const list = document.querySelector(".task-list");
    if (!list)
        return;
    let liNodes = '';
    obj.tasks.forEach((e, i) => {
        liNodes +=
            `<li class="info-${i + 1}" >
          <span>${i}</span>
          <span>${e.name}</span>
          <span>${e.description}</span>
          <span>${e.timetable}</span>
          <span>Current: ${e.state}</p>
          <label>Update the task:</label>
          <select class="changeStatus" onchange="${updateStateOfTask(e)}" >
              <option value="${Status.COMPLETED}">Accomplished</option>
              <option value="${Status.INCOMPLETE}">Loser</option>
              <option value="${Status.PENDING}">Pending...</option>
          </select>
          <span class="list-${i}" onclick="${removeTaskOfList(e, i)}">🗑️</span>
      </li>`;
    });
    list.innerHTML = liNodes;
};
const getTaskFound = (task) => {
    let catchTask = intanceObj.searchTask(task);
    return catchTask;
};
const updateStateOfTask = (task) => {
    const newStatus = document.querySelector('.changeStatus');
    let stateValue = newStatus.value;
    let foundTask = getTaskFound(task);
    intanceObj.updateStatus(foundTask, stateValue);
};
const removeTaskOfList = (task, index) => {
    try {
        const span = document.querySelector(`.list-${index}`);
        let elementLi = span.closest('li');
        elementLi === null || elementLi === void 0 ? void 0 : elementLi.remove();
        let foundTask = getTaskFound(task);
        intanceObj.removeTask(foundTask);
    }
    catch (e) {
        console.error('Error: ', e.message);
    }
};
const init = () => {
    addTaskToList();
};
window.addEventListener("load", init);
//# sourceMappingURL=index.js.map