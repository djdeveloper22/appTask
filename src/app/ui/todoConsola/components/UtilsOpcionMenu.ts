import { TodoDto } from './../../../domain/dto/TodoDto';
import { IConsoleRepositorie } from "../../../domain/repositories/IConsoleRepositorie";
import { IOptionMenu } from '../../../domain/contract/IOptionMenu';
import { ViewConsole } from '../../../core/utils/ViewConsole';
import { MenuOption } from '../../../core/constants/menu.options.enum';
import { ContentTitleMenu } from './ContentTitleMenu.enum';
import { OptionMenu } from './OptionMenu.enum';
import { enterContinue } from './EnterContinue';
import scanf from "scanf";

export class UtilsOptionMenu implements IOptionMenu {

  private taskManager: IConsoleRepositorie<TodoDto>;
  private view: ViewConsole;
  
  constructor(taskManager: IConsoleRepositorie<TodoDto>, view: ViewConsole) {
    this.taskManager = taskManager;
    this.view = view;
  }

  opcionCreate(op: number): void {
    if (MenuOption.create === op) {
      let modulo: string;
      let task: string;

      do {
        this.view.showMessage(ContentTitleMenu.titleCreateModulo);
        modulo = scanf('%S');
      } while (modulo === '');

      do {
        this.view.showMessage(ContentTitleMenu.titleCreateTask)
        task = scanf('%S');
      } while (task === '');

      this.view.clearConsole();

      this.taskManager.create({ nombre: modulo, description: task });

      this.view.showMessage(OptionMenu.enterContinue);
      enterContinue.enter();
    }
  }

  opcionRead(op: number): void {
    try {
      if (MenuOption.read === op) {
        this.view.clearConsole();
        this.view.showTable(this.taskManager.read());
      }

    } catch (error: any) {
      error.readMessageError();
    }
  }

  opcionUpdate(op: number): void {
    if (op === MenuOption.update) {
      this.view.showMessage(ContentTitleMenu.titleUpdate)
      this.view.showTable(this.taskManager.read());

      this.view.showMessage(ContentTitleMenu.titleUpdatePosition)
      let posicion: number = scanf('%d');

      this.view.showMessage(ContentTitleMenu.titleUpdateModulo)
      let moduloUpdate: string = scanf('%S');

      this.view.showMessage(ContentTitleMenu.titleUpdateTask)
      let taskUpdate: string = scanf('%S');

      this.view.clearConsole();

      this.taskManager.update(posicion, { nombre: moduloUpdate, description: taskUpdate });
    }
  }

  opcionDelete(op: number): void {
    try {
      if (MenuOption.delete === op) {
        this.view.showTable(this.taskManager.read());

        this.view.showMessage(ContentTitleMenu.titleDeletePosition);
        let posDelete: number = scanf('%d');

        this.view.clearConsole();

        this.taskManager.delete(posDelete);
      }
    } catch (error: any) {
      error.deleteMessageError();
    }
  }

  opcionExit(op: number): void {
    if (MenuOption.exit === op) {
      this.view.clearConsole();
      this.view.showMessage(ContentTitleMenu.titleExitApp);
    }
  }
}