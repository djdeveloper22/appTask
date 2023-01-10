import { IFormElements } from './../../domain/contract/IFormElements';

export class FormElements implements IFormElements {

  elementModal(): HTMLElement {
    const elementModal: HTMLElement = document.createElement('div');
    elementModal.className = 'modal';
    elementModal.id = 'myModal';
    return elementModal;
  }
  
  elementRoot(): HTMLElement {
    let elementRoot: HTMLElement = document.querySelector('#root');
    return elementRoot;
  }

  container__listTask(): HTMLElement {
    let container__listTask: HTMLElement = document.querySelector('.listTask');
    return container__listTask;
  }

  /**
   * contTask(): number {
    let contTask = 1;
    return contTask;
  }

  contDesign(): number {
    let contDesign = 1;
    return contDesign;
  }

  contOtros(): number {
    let contOtros = 1;
    return contOtros;
  }
   * 
   */
  
  acumulador(): number {
    let acumulador = 0;
    return acumulador;
  }
  
  elementInputEstadoTask(): HTMLFormElement {
    let elementoInputEstadoTask: HTMLFormElement = document.querySelector('#inputEstadoTask');
    return elementoInputEstadoTask;
  }

  elementFormulario(): HTMLFormElement {
    let elementoFormulario: HTMLFormElement = document.querySelector('#formulario');
    return elementoFormulario;
  }

  elementContTaskProject(): HTMLFormElement {
    let elementContTaskProject: HTMLFormElement = document.querySelector('#contTaskProject');
    return elementContTaskProject;
  }

  elementContTaskDesign(): HTMLFormElement {
    let elementContTaskDesign: HTMLFormElement = document.querySelector('#contTaskDesign');
    return elementContTaskDesign;
  }

  elementContTaskOtros(): HTMLFormElement {
    let elementContTaskOtros: HTMLFormElement = document.querySelector('#contTaskOtros');
    return elementContTaskOtros;
  }

  elementMsjTask(): HTMLFormElement {
    let elementMsjTask: HTMLFormElement = document.querySelector('#contTaskOtros');
    return elementMsjTask;
  }
  
  elementInputOptionPrioridad(): HTMLFormElement {
    let elementoInputOptionPrioridad: HTMLFormElement = document.querySelector('#inputOptionPrioridad');
    return elementoInputOptionPrioridad;
  }
  
  eLementContador(): HTMLFormElement {
    let contador: HTMLFormElement = document.querySelector('#contadorTareas');
    return contador;
  }

  elementModuloTarea(): HTMLFormElement {
    let elementoModuloTarea: HTMLFormElement = document.querySelector('#moduloTarea');
    return elementoModuloTarea;
  }

  elementTypeProject(): HTMLFormElement {
    let elementoTypeProject: HTMLFormElement = document.querySelector('#msjTarea');
    return elementoTypeProject;
  }  
}