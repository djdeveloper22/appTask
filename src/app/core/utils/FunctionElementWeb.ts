import { FormElements } from './../constants/FormElements';
import { TodoDto } from "../../domain/dto/TodoDto";
import { TaskManagerAppWeb } from '../services/TaskManagerAppWeb';
import { OPTION_PROJECT } from '../constants/Constantes';

export class FunctionElementWeb {

 private task: TaskManagerAppWeb;
 private element: FormElements;

 constructor(task: TaskManagerAppWeb, element: FormElements){
  this.task = task;
  this.element = element;
 }

  insertListTask(contador: number, elementos: Array<TodoDto>, listTask: HTMLElement): void {
    listTask.innerHTML += `
       <div class="elementos__listTask" id="posTask${contador}">
         <input class="checkbox-pop" type="checkbox" id="check${contador}" />
         <label for="check${contador}"><span>${elementos[contador - 1].nameTask}</span></label>
       </div>
     `
  }
  
  elementIncludeArray(array: Array<TodoDto>): void {
    
    this.task.read().length >= 0 ? this.element.elementLisTaskProjects().textContent = '' : null;
    this.task.read().length >= 0 ? this.element.elementListaDesign().textContent = '' : null;
    this.task.read().length >= 0 ? this.element.elementLisTaskOtros().textContent = '' : null;

    array.filter((el) => {
      if (el.typeProject === OPTION_PROJECT['Project Programming']) {
        this.element.elementLisTaskProjects().innerHTML += `
          <li class="elements__listTask">
            <div>${el.nameTask}</div>
            <div>${el.typeProject}</div>
            <div>${el.priorityTask}</div>
            <div>${el.stateTask}</div>
          </li>
        `
      } else if (el.typeProject === OPTION_PROJECT['Project Design']) {
        this.element.elementListaDesign().innerHTML += `
          <li class="elements__listTask">
            <div>${el.nameTask}</div>
            <div>${el.typeProject}</div>
            <div>${el.priorityTask}</div>
            <div>${el.stateTask}</div>
          </li>
        `
      } else if (el.typeProject === OPTION_PROJECT['other Task']) {
        this.element.elementLisTaskOtros().innerHTML += `
          <li class="elementos__listTask">
            <div>${el.nameTask}</div>
            <div>${el.typeProject}</div>
            <div>${el.priorityTask}</div>
            <div>${el.stateTask}</div>
          </li>
        `
      }
    });
  }

  cleanForm(formulario: HTMLFormElement): void {
    formulario.reset();
  }
}