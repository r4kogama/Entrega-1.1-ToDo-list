import { Note } from "./note";
//import { TaskStatus as Status } from "./taskStatus";

export class Task <T>  implements Note <T> {
    tasks!: Note<T>[];
    id!: T ;
    name: T;
    description: T;
    timetable: T;
    state: T

    constructor( name: T, description: T, timetable: T, status: T ){
        
        this.name = name;
        this.description = description;
        this.timetable = timetable;
        this.state = status;
    }
    
    addTask(task:Note<T>): void {
        this.tasks.push(task);
    }
    
    searchTask(task: Note<T>): Note<T> | undefined{
        let findTask: Note<T> | undefined = this.tasks.find( (ele: Note<T>) => ele.name === task.name);
        return findTask;
    }
    
    removeTask(task: Note<T>): void {
        let indexTask: number = this.tasks.findIndex( (ele : Note<T>) => ele.name === task.name );
        if(indexTask !== -1){
            this.tasks.splice(indexTask, 1);
        }
    }
    
}
