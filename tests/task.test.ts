
import { expect, jest, test, describe, beforeEach } from '@jest/globals';
import { Task } from "../src/shared/model/task";
import { Note } from "../src/shared/model/note";

let newTask: Task<any>;
 
beforeEach(() => {
    newTask = Task.createInstanceNewObject('Title','Description','Date','OldStatus')
});


describe('CRUD test de tarea sin el control del formulario',()=>{
    test('Añade la tarea a la lista de tareas', () =>{
        newTask.addTask(newTask);
        expect(newTask.tasks.length).toBeGreaterThan(0);
    });

    test('Si existe, busca la tarea que esta en la lista', () =>{
        const objtask = { name: 'Title' };
        newTask.addTask(newTask);
        const getTask = newTask.searchTask(newTask);
        expect(getTask?.name).toContain(objtask.name);
    }); 

    test('Actualizar el estado de la tarea', ()=>{
        const objtask = { status: 'NewStatus' };
        newTask.updateStatus(newTask, objtask.status);
        expect(newTask.state).toEqual('NewStatus');
     });

    test('Elimina la tarea de la lista de tareas', () =>{
        const objtask = { name: 'Title' };
        newTask.addTask(newTask);
        newTask.removeTask(newTask);
        expect(newTask.tasks).not.toContain(objtask.name);
    });
    
    test('Si no existe, comprueba que la tarea ya no esta en la lista', () =>{
        const objtask = { name: 'Title' };
        const getTask = newTask.searchTask(newTask);
        expect(getTask).toBeUndefined();
    });  
})

