import { TodoDto } from './../../domain/dto/TodoDto';

export class FunctionElementWeb {

  insertElementWeb(contador: number, elementos: Array<TodoDto>) {
    const container__listTask = document.querySelector('.container__listTask');
    container__listTask.innerHTML += `
       <div class="elementos__listTask">
         <input class="checkbox-pop" type="checkbox" id="check${contador}" />
         <label for="check${contador}"><span></span> ${elementos[contador - 1].nameTask}</label>
       </div>
     `
  }

  cleanForm(formulario: HTMLFormElement) {
    formulario.reset();
  }

}