import { ClearInput } from '../../core/utils/ClearInput';
import { TaskManagerAppWeb } from './../../core/services/TaskManagerAppWeb';
import { Events } from './../../core/utils/Events';
import { UtilsComponents } from './../../core/utils/UtilsComponent';
import { IWebAplication } from './../../domain/contract/IWebAplication';

export class myWebApp implements IWebAplication {
  private componenteWeb: UtilsComponents;
  private ev: Events;
  private task: TaskManagerAppWeb;

  constructor(componenteWeb: UtilsComponents, ev: Events, task: TaskManagerAppWeb) {
    this.componenteWeb = componenteWeb;
    this.ev = ev;
    this.task = task;
  }

  startInitApp(): void {
    setTimeout(() => {
      this.componenteWeb.setComponent('section_Icons', 'sectionIcon'),
        this.componenteWeb.setComponent('app_projects', 'sectionAppProjects'),
        this.componenteWeb.setComponent('app_design', 'sectionAppDesign')
    }, 100)
    setTimeout(() => this.showModal(), 500);
  }

  showModal(): void {
    const root = document.querySelector('#root');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'myModal';

    this.ev.click('#showModal', () => {
      root.appendChild(modal);
      setTimeout(() => this.componenteWeb.setComponent('myModal', 'modalTask'), 100);
      setTimeout(() => {
        this.saveTask();
        this.close();
      },
        1000);

      modal.style.marginLeft = '0%';
    });
  }

  close(): void {
    const modal: HTMLElement = document.querySelector('#myModal');
    this.ev.click('#closeModal', () => {
      setTimeout(() => {
        modal.style.marginLeft = '-100%';
        modal.style.transition = 'all 0.5s ease-in'
      }, 100)
      setTimeout(() => modal.remove(), 700)
    });
  }

  saveTask(): void {
    this.ev.click('#btnSave', () => {
      let acumulador: number = 0;
      const clearInput = new ClearInput();
      const formulario: HTMLFormElement = document.querySelector('#formulario');
      const moduloTarea: HTMLFormElement = document.querySelector('#moduloTarea');
      const descriptionTask: HTMLFormElement = document.querySelector('#descriptionTask');
      const inputOptionPrioridad: HTMLFormElement = document.querySelector('#inputOptionPrioridad');
      //const inputFechaTask: HTMLFormElement = document.querySelector('#inputFechaTask');
      const inputEstadoTask: HTMLFormElement = document.querySelector('#inputEstadoTask');
      const contador = document.querySelector('#contadorTareas');
      const msjTask: HTMLElement = document.querySelector('#msjTarea');
      
      let taskIsSave = this.task.create({
        nombre: moduloTarea.value,
        description: descriptionTask.value,
        prioridadTask: inputOptionPrioridad.value,
        estadoTask: inputEstadoTask.value,
        //createDate: new Date(),
      });

      if (taskIsSave) {
        contador.innerHTML = `${this.task.read().length}`
        acumulador = acumulador + this.task.read().length;
        msjTask.style.top = '1rem';
        msjTask.style.transition = 'all 0.3s ease-in'
        setTimeout(() => {msjTask.style.top = '-7rem';}, 1500);
        this.showTask(acumulador);
      }
      
      console.table(this.task.read());

      clearInput.clear(formulario);
    });
  }

  
  showTask(acumulador: number): void {
   const myTask = document.querySelector('#myTask');
   myTask.innerHTML += `
   <input class="checkbox-pop" type="checkbox" id="check${acumulador}" />
   <label for="check${acumulador}">
    <span>
      ${moduloTarea} + ${descriptionTask} + ${inputOptionPrioridad.value} + ${moduloTarea.value} 
    </span>  
   </label>
   `

  }
  
}