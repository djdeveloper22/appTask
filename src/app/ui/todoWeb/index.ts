import { Validator } from './../../core/utils/Validator';

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
        this.close(); },
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
      const moduloTarea: HTMLFormElement = document.querySelector('#moduloTarea');
      const descriptionTask: HTMLFormElement = document.querySelector('#descriptionTask');
      const contador = document.querySelector('#contadorTareas');
      let acumulador: number = 0;
      const msjTask: HTMLElement = document.querySelector('#msjTarea');
      const clearInput = new ClearInput;

      if (moduloTarea.value === '' || descriptionTask.value === '') {
        alert('caja vacia, ingrese la informacion requerida');
      } else {
        let taskIsSave = this.task.create({ nombre: moduloTarea.value, description: descriptionTask.value });
        if (taskIsSave) {
          contador.innerHTML = `${this.task.read().length}`
          acumulador = acumulador + this.task.read().length;
          msjTask.style.top = '1rem';
          msjTask.style.transition = 'all 0.3s ease-in'
          setTimeout(() => msjTask.style.top = '-7rem', 1500);
          let objInput = new Validator();
          objInput.validarInput();
          
        }

        clearInput.clear(moduloTarea, descriptionTask);
      }
    });
  }

  //esto no va
  // showTask(contador: number): void {
  //   this.ev.click('#showTask', () => {
  //     if (this.task.read().length <= 0) {
  //       console.log('no tienes tareas agregadas');
  //     } else {
  //       const listaTareas: HTMLElement = document.querySelector('.listaTareas');
  //       const contenedorTareas: HTMLElement = document.querySelector('.contenedorTareas');
  //       listaTareas.style.display = 'flex';
  //       contenedorTareas.innerHTML += `
  //         <tr class="prioirty-200">
  //           <td>${this.task.read()[contador].nombre}</td>
  //           <td>${this.task.read()[contador].description}</td>
  //           <td><i class="fa fa-circle"></i></td>
  //           <td>alta</td>
  //           <td>
  //             <i class="bi bi-trash-fill"></i>
  //             <i class="bi bi-pencil-fill"></i>
  //           </td>
  //         </tr>
  //       `
  //       console.table(this.task.read());
  //     }
  //   });
  // }
}