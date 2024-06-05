"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(name, description, timetable, status) {
        this.name = name;
        this.description = description;
        this.timetable = timetable;
        this.state = status;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    searchTask(task) {
        let findTask = this.tasks.find((ele) => ele.name === task.name);
        return findTask;
    }
    removeTask(task) {
        let indexTask = this.tasks.findIndex((ele) => ele.name === task.name);
        if (indexTask !== -1) {
            this.tasks.splice(indexTask, 1);
        }
    }
}
exports.Task = Task;
//# sourceMappingURL=task.js.map