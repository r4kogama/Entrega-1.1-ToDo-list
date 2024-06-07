import { Note } from "./note";
//import { TaskStatus as Status } from "./taskStatus";

export class Task <T>  implements Note <T> {

    tasks: Note<T>[] = [];
    id!: T ;
    name?: T;
    description?: T;
    timetable?: T;
    state?: T

    constructor( name?: T, description?: T, timetable?: T, status?: T ){
        this.name = name ?? undefined ;
        this.description = description ?? undefined;
        this.timetable = timetable ?? undefined;
        this.state = status ?? undefined;
    }
    
   //factory method
     static createInstanceNewObject<T>( name?: T, description?: T, timetable?: T, status?: T): Task<T> {
        return new Task<T>(name, description, timetable, status);
    }
    
    addTask(task:Note<T>): void {
        this.tasks.push(task);
    }
    
    searchTask(task:Note<T> | undefined): Note<T> | undefined{
        if(task === undefined) throw new Error("Error data search undefined");
        const foundTask: Note<T> | undefined = this.tasks.find( (ele: Note<T>) => ele.name === task.name);
        //let nameTask: string | undefined = foundTask?.name?.toString() ;
        return foundTask;
    }
    
    removeTask(task : Note<T> | undefined): void {
        if(task === undefined) throw new Error("Error data remove undefined");
        let indexTask: number = this.tasks.findIndex( (ele : Note<T>) => ele.name === task.name );
        if(indexTask === -1) throw new Error("Error no se ha podido eliminar");
        this.tasks.splice(indexTask, 1);
    }

   
    
}
