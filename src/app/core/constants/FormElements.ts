import { IFormElements } from './../../domain/contract/IFormElements';

export class FormElements implements IFormElements {
  elementLisTaskProjects(): HTMLElement{
    let lisTaskProjects: HTMLElement = document.querySelector('.lisTaskProjects');
    return lisTaskProjects;
  }

  elementListaDesign(): HTMLElement{
    let lisTaskDesign: HTMLElement = document.querySelector('.lisTaskDesign');
    return lisTaskDesign;

  }
  elementLisTaskOtros(): HTMLElement{
    let lisTaskOtros: HTMLElement = document.querySelector('.lisTaskOtros');
    return lisTaskOtros;
  }

  eLementContador(): HTMLFormElement {
    throw new Error('Method not implemented.');
  }

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
  
  elementInputProject(): HTMLFormElement{
    let elementInputProject: HTMLFormElement = document.querySelector('#inputProject');
    return elementInputProject;
  }

  elementModuloTarea(): HTMLFormElement {
    let elementoModuloTarea: HTMLFormElement = document.querySelector('#moduloTarea');
    return elementoModuloTarea;
  }

  elementTypeProject(): HTMLFormElement {
    let elementoTypeProject: HTMLFormElement = document.querySelector('#msjTarea');
    return elementoTypeProject;
  }  

  elementContador(): HTMLFormElement {
    let contador: HTMLFormElement = document.querySelector('#contadorTareas');
    return contador;
  }

  elementContTask(): HTMLFormElement {
    let contTask: HTMLFormElement = document.querySelector('#contTaskProject') ;
    return contTask;
  }

  elementContDesign(): HTMLFormElement {
    let contDesign: HTMLFormElement = document.querySelector('#contTaskDesign');
    return contDesign;
  }

  elementContOtros(): HTMLFormElement {
    let contOtros: HTMLFormElement = document.querySelector('#contTaskOtros');
    return contOtros;
  }
}