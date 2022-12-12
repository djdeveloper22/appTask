import { IViewConsole } from '../../domain/contract/IViewConsole';

export class ViewConsole implements IViewConsole{
  showMenu(menu: any): void {
    Object.values(menu).forEach( (menu, index) => console.log(menu) )
  }
  showMessage(msg: string): void {
    console.log(msg);
  }
  showError(msgError: string): void {
    console.log(msgError);
  }
  showTable(obj: any): void {
    console.table(obj);
  }

  clearConsole(): void{
    console.clear();
  }
}