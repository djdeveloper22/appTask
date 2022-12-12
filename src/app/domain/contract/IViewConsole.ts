
export interface IViewConsole{
  showMenu(menu: any): void;
  showMessage(msg: string): void;
  showError(msgError: string): void;
  showTable(obj: any): void;
  //spaceEnter(): void;
}