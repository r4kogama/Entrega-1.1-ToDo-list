export class Task {
    constructor(name, description, timetable, status) {
        this.tasks = [];
        this.name = name !== null && name !== void 0 ? name : undefined;
        this.description = description !== null && description !== void 0 ? description : undefined;
        this.timetable = timetable !== null && timetable !== void 0 ? timetable : undefined;
        this.state = status !== null && status !== void 0 ? status : undefined;
    }
    static createInstanceNewObject(name, description, timetable, status) {
        return new Task(name, description, timetable, status);
    }
    addTask(task) {
        this.tasks.push(task);
    }
    searchTask(task) {
        if (task === undefined)
            throw new Error("Error data search undefined");
        const foundTask = this.tasks.find((ele) => ele.name === task.name);
        console.log(foundTask);
        return foundTask;
    }
    removeTask(task) {
        if (task === undefined)
            throw new Error("Error data remove undefined");
        let indexTask = this.tasks.findIndex((ele) => ele.name === task.name);
        console.log(indexTask);
        this.tasks.splice(indexTask, 1);
    }
    updateStatus(task, updateState) {
        if (task === undefined)
            throw new Error("Error data update undefined");
        if (updateState === undefined)
            throw new Error("Error no se ha podido actualizar el estado");
        task.state = updateState;
    }
}
//# sourceMappingURL=task.js.map