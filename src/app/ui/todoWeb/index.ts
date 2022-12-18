
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
    setTimeout(() => this.componenteWeb.setComponent('section_Icons', 'sectionIcon'), 100)
    setTimeout(() => this.componenteWeb.setComponent('app_projects', 'sectionAppProjects'), 100)
    setTimeout(() => this.componenteWeb.setComponent('app_design', 'sectionAppDesign'), 100)
    setTimeout(() => this.showModal(), 500);
  }

  showModal(): any {
    const root = document.querySelector('#root');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'myModal';

    this.ev.click('#showModal', () => {
      root.appendChild(modal);
      setTimeout(() => this.componenteWeb.setComponent('myModal', 'modalTask'), 100);
      setTimeout(() => { this.saveTask() }, 1000)
      setTimeout(() => { this.close() }, 1000)
      modal.style.marginLeft = '0%';
    });
  }

  close() {
    const modal: HTMLElement = document.querySelector('#myModal');
    this.ev.click('#closeModal', () => {
      setTimeout(() => {
        modal.style.marginLeft = '-100%';
        modal.style.transition = 'all 0.5s ease-in'
      }, 100)
      setTimeout(() => modal.remove(), 700)
    })
  }

  saveTask(): Events {
    this.ev.click('#btnSave', () => {
      const moduloTarea: any = document.querySelector('#moduloTarea');
      const descriptionTask: any = document.querySelector('#descriptionTask');
      const contador = document.querySelector('#contadorTareas');
      const msjTask: HTMLElement = document.querySelector('#msjTarea');
      const clearInput = new ClearInput;

      if (moduloTarea.value === '' || descriptionTask === '') {
        alert('caja vacia, ingrese la informacion requerida');
      } else {
        this.task.create({ nombre: moduloTarea.value, description: descriptionTask.value });
        if (this.task.taskList.length > 0) {
          contador.innerHTML = `${this.task.taskList.length}`
          msjTask.style.top = '1rem';
          msjTask.style.transition = 'all 0.3s ease-in'
          setTimeout(() => { msjTask.style.top = '-7rem'; }, 1500);
        }
        clearInput.clear(moduloTarea, descriptionTask);
      }
    });
    return new Events
  }
}