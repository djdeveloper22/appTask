import { Events } from './../../core/utils/Events';
import { UtilsComponents } from './../../core/utils/UtilsComponent';
import { IWebAplication } from './../../domain/contract/IWebAplication';

export class myWebApp implements IWebAplication {
  private componenteWeb: UtilsComponents;
  private ev: Events;
  

  constructor(componenteWeb: UtilsComponents, ev: Events) {
    this.componenteWeb = componenteWeb;
    this.ev = ev;
  }

  startInitApp(): void {
    setTimeout(() => this.componenteWeb.setComponent('section_Icons', 'sectionIcon'), 100)
    setTimeout(() => this.componenteWeb.setComponent('app_projects', 'sectionAppProjects'), 100)
    setTimeout(() => this.componenteWeb.setComponent('app_design', 'sectionAppDesign'), 100)
    setTimeout(()=>this.showModal(), 500)
  }

  showModal(): any{
    const root = document.querySelector('#root');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'myModal';

    this.ev.click('#showModal', ()=>{
      root.appendChild(modal);
      setTimeout(() => this.componenteWeb.setComponent('myModal', 'modalTask'), 100);
      setTimeout(()=>{this.saveTask()},500)
      setTimeout(()=>{this.close()},1000)
    });
  }

  close(){
    const modal = document.querySelector('#myModal');
    this.ev.click('#closeModal',()=> {
      modal.remove();
    })
  }

  saveTask(): any{
    this.ev.click('#btnSave', ()=>{
      let modulotarea = document.querySelector('#moduloTarea');
      const description = document.querySelector('#description');
      
    })
  }
}