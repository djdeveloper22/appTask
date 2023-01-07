import { FunctionElementWeb } from '../../core/utils/FunctionElementWeb';
import { TaskManagerAppWeb } from './../../core/services/TaskManagerAppWeb';
import { Events } from './../../core/utils/Events';
import { UtilsComponents } from './../../core/utils/UtilsComponent';
import { IWebAplication } from './../../domain/contract/IWebAplication';
import { FormElements } from '../../core/constants/FormElements';
export class myWebApp implements IWebAplication {
  private componenteWeb: UtilsComponents;
  private ev: Events;
  private task: TaskManagerAppWeb;
  private elementsForm: FormElements;

  constructor(componenteWeb: UtilsComponents, ev: Events, task: TaskManagerAppWeb, elementsForm: FormElements) {
    this.componenteWeb = componenteWeb;
    this.ev = ev;
    this.task = task;
    this.elementsForm = elementsForm;
  }

  startInitApp(): void {
    setTimeout(() => {
      this.componenteWeb.setComponent('section_Icons', 'sectionIcon'),
        this.componenteWeb.setComponent('app_projects', 'sectionAppProjects'),
        this.componenteWeb.setComponent('app_design', 'sectionAppDesign')
    }, 100);
    setTimeout(() => this.showModal(), 500);
  }

  showModal(): void {
    this.ev.click('#showModal', () => {
      this.elementsForm.elementRoot().appendChild(this.elementsForm.elementModal());
      setTimeout(() => this.componenteWeb.setComponent('myModal', 'modalTask'), 100);
      setTimeout(() => {
        this.saveTask();
        this.close();
      },
        1000);

      this.elementsForm.elementModal().style.marginLeft = '0%';
    });
  }

  close(): void {
    const modal: HTMLElement = document.querySelector('#myModal');
    this.ev.click('#closeModal', () => {
      setTimeout(() => {
        modal.style.marginLeft = '-100%';
        modal.style.transition = 'all 0.5s ease-in'
      }, 100);
      setTimeout(() => modal.remove(), 700);
    });
  }

  saveTask(): void {

    this.ev.click('#btnSave', () => {
      const elementWeb = new FunctionElementWeb();
      let taskIsSave = this.task.create({
        nameTask:     this.elementsForm.elementModuloTarea().value,
        typeProjetc:  this.elementsForm.elementTypeProject().value,
        priorityTask: this.elementsForm.elementInputOptionPrioridad().value,
        stateTask:    this.elementsForm.elementInputEstadoTask().value,
        createDate:   new Date(),
      });

      if (taskIsSave) {
        let acu: number = 0;
        this.elementsForm.eLementContador().innerHTML = `${this.task.read().length}`;
        acu = this.elementsForm.acumulador() + this.task.read().length;

        setTimeout(() => {
          this.elementsForm.elementMsjTask().style.top = '-7rem';
          this.showTask(acu);
        }, 500);
      }
      
      elementWeb.cleanForm(this.elementsForm.elementFormulario());
    });
  }

  showTask(contador: number): void {
    const elementWeb = new FunctionElementWeb();
    elementWeb.insertListTask(contador, this.task.read(), this.elementsForm.container__listTask());
  }
}