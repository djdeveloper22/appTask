import { valueProject } from './../../core/constants/valueProject.enum';
import { FunctionElementWeb } from '../../core/utils/FunctionElementWeb';
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
      const cleanInput = new FunctionElementWeb();
      const formulario: HTMLFormElement = document.querySelector('#formulario');
      const moduloTarea: HTMLFormElement = document.querySelector('#moduloTarea');
      const typeProject: HTMLFormElement = document.querySelector('#inputProject');
      const inputOptionPrioridad: HTMLFormElement = document.querySelector('#inputOptionPrioridad');
      const inputEstadoTask: HTMLFormElement = document.querySelector('#inputEstadoTask');
      const contador = document.querySelector('#contadorTareas');
      const msjTask: HTMLElement = document.querySelector('#msjTarea');
      const title: HTMLElement = document.querySelector('.title');
      title.style.display = 'none';

      let taskIsSave = this.task.create({
        nameTask: moduloTarea.value,
        typeProjetc: typeProject.value,
        priorityTask: inputOptionPrioridad.value,
        stateTask: inputEstadoTask.value,
        createDate: new Date(),
      });

      if (taskIsSave) {
        contador.innerHTML = `${this.task.read().length}`
        acumulador = acumulador + this.task.read().length;
        msjTask.style.top = '1rem';
        msjTask.style.transition = 'all 0.3s ease-in'
        setTimeout(() => {
          msjTask.style.top = '-7rem';
          this.showTask(acumulador);
        }, 1500);
      }

       cleanInput.cleanForm(formulario);
    });
  }

  showTask(contador: number): void {
    const elementWeb = new FunctionElementWeb();
    const inputProject: HTMLFormElement = document.querySelector('#inputProject');
    let elementos = this.task.read();
    if (elementos.length) {
      // elementos.forEach((el, pos)=>{
      //   console.log(el.nameTask + ' ' + inputProject.options[pos].value);
        
      // })
      elementWeb.insertElementWeb(contador, elementos);
    }
  }
}