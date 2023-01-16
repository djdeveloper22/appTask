import { FormElements } from './../constants/FormElements';
import { TodoDto } from "../../domain/dto/TodoDto";
import { TaskManagerAppWeb } from '../services/TaskManagerAppWeb';
import { OPTION_PROJECT } from '../constants/Constantes';

export class FunctionElementWeb {

  insertListTask(contador: number, elementos: Array<TodoDto>, listTask: HTMLElement): void {
    listTask.innerHTML += `
       <div class="elementos__listTask">
         <input class="checkbox-pop" type="checkbox" id="check${contador}" />
         <label for="check${contador}"><span>${elementos[contador - 1].nameTask}</span></label>
       </div>
     `
  }

  elementIncludeArray(array: Array<TodoDto>): void {
    const myArray = new TaskManagerAppWeb;
    const elements = new FormElements;//inyeccion de dependencia

    myArray.read().length >= 0 ? elements.elementLisTaskProjects().textContent = '' : null;
    myArray.read().length >= 0 ? elements.elementListaDesign().textContent = '' : null;
    myArray.read().length >= 0 ? elements.elementLisTaskOtros().textContent = '' : null;

    array.filter((el) => {
      if (el.typeProject === OPTION_PROJECT['Project Programming']) {
        elements.elementLisTaskProjects().innerHTML += `
          <li class="elements__listTask">
            <div>${el.nameTask}</div>
            <div>${el.typeProject}</div>
            <div>${el.priorityTask}</div>
            <div>${el.stateTask}</div>
          </li>
        `
      } else if (el.typeProject === OPTION_PROJECT['Project Design']) {
        elements.elementListaDesign().innerHTML += `
          <li class="elements__listTask">
            <div>${el.nameTask}</div>
            <div>${el.typeProject}</div>
            <div>${el.priorityTask}</div>
            <div>${el.stateTask}</div>
          </li>
        `
      } else if (el.typeProject === OPTION_PROJECT['other Task']) {
        elements.elementLisTaskOtros().innerHTML += `
          <li class="elementos__listTask">
            ${el.nameTask}
          </li>
        `
      }
    });
  }

  cleanForm(formulario: HTMLFormElement): void {
    formulario.reset();
  }
}