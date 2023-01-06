import { TodoDto } from "../../domain/dto/TodoDto";

export class FunctionElementWeb {
  insertListTask(contador: number, elementos: Array<TodoDto>, listTask: HTMLElement): void {
    listTask.innerHTML += `
       <div class="elementos__listTask">
         <input class="checkbox-pop" type="checkbox" id="check${contador}" />
         <label for="check${contador}"><span></span> ${elementos[contador - 1].nameTask}</label>
       </div>
     `
  }

  cleanForm(formulario: HTMLFormElement): void {
    formulario.reset();
  }

  isTypeProjects(v1: any, v2: HTMLFormElement, elemento: InnerHTML, sumador: number) {
    if (v1 === v2.value)
      console.log(elemento.innerHTML = `${sumador++}`);
    
  }
}