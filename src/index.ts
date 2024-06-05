import { Note } from "./shared/model/note";
import { Task } from "./shared/model/task";
//import { TaskStatus as Status } from "./shared/model/taskStatus";




const addTaskToList = < U extends HTMLElement & { value: string}>(): void => {
    const btnAdd = document.querySelector(".btn-add") as U | null;
    if (btnAdd !== null) {
      btnAdd.addEventListener("click", (event: Event) => {
        event.preventDefault();
        const values: string[] = getFormValue();
  
      });
    }
  };

const getFormValue = <U extends HTMLElement & { value: string} >(): string[] =>{
    const nodeElements = Array.from(document.querySelectorAll(".inputValue")) as U[]; 
    return nodeElements.map(e => e.value);
}

  const init = () => {
    addTaskToList();
}


window.addEventListener("load", init);