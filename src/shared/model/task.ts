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
    
   
    
}
