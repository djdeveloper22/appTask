import { TodoDto } from "../../domain/dto/TodoDto";

export class FunctionElementWeb {
  insertListTask(contador: number, elementos: Array<TodoDto>, listTask: HTMLElement): void {
    listTask.innerHTML += `
       <div class="elementos__listTask">
         <input class="checkbox-pop" type="checkbox" id="check${contador}" />
         <label for="check${contador}"><span>${elementos[contador - 1].nameTask}</span> </label>
       </div>
     `
  }

  cleanForm(formulario: HTMLFormElement): void {
    formulario.reset();
  }
}