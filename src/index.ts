import { Note } from "./shared/model/note";
import { Task } from "./shared/model/task";
import { TaskStatus as Status } from "./shared/model/taskStatus";




const addTaskToList = <U extends HTMLElement & { value: string }>(): void => {
  const btnAdd = document.querySelector(".btn-add") as U | null;
  if (btnAdd !== null) {
    btnAdd.addEventListener("click", (event: Event) => {
      event.preventDefault();
      const values: string[] | undefined = getFormValue();
      const objTask: Task<string> = createTask<string>(values);
      objTask.addTask(objTask);
      createTaskList(objTask);
    });
  }
};

const getFormValue = <U extends HTMLElement & { value: string }>(): string[]=> {
  try{
    const nodeElements = Array.from(document.querySelectorAll(".inputValue")) as U[];
    if(nodeElements.length > 4 ){
      throw new Error("No se cumplen los campos del formulario");
    } 
    const arrValues: string[] | undefined = nodeElements.map((e: U , i : number) => {
      if(i === 0){
        return e.value.toLowerCase();
      }
      return e.value;
    });
    return arrValues;

  }catch(e){
    console.error('Error: ', (e as Error).message);
    return [];
  }
}


const createTaskList = <T>(obj: Task<T>): void => {
  const list = document.querySelector(".task-list") as  HTMLUListElement | null;
  if (!list) return;
  let liNodes = '' as string;
  obj.tasks.forEach((e: Note<T>, i: number) => {
    liNodes +=
      `<li class="info-${i+1}" >
          <span>${i as number}</span>
          <span>${e.name as string}</span>
          <span>${e.description as string}</span>
          <span>${e.timetable as string}</span>
          <span>Current: ${e.state as string}</p>
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
}

const getTaskFound = <T>(task : Note<T>): Note<T> | undefined =>{
  let catchTask: Note<T> | undefined = intanceObj.searchTask(task);
  return catchTask;
}



const removeTaskOfList = <T>(task : Note<T>, index: number):void =>{
  try{
    const span = document.querySelector(`.list-${index}`) as HTMLSpanElement;
    let elementLi = span.closest('li') as HTMLLIElement;
    elementLi?.remove();
    let foundTask: Note<T> | undefined = getTaskFound(task);
    intanceObj.removeTask(foundTask);
  }catch(e){
    console.error('Error: ', (e as Error).message);
  }
   
}

const init = () => {
  addTaskToList();
}


window.addEventListener("load", init);