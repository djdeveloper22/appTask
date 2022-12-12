
import scanf from 'scanf';
import { MenuOption } from '../../core/constants/menu.options.enum';
import { ViewConsole } from '../../core/utils/ViewConsole';
import { IConsolaAplications } from '../../domain/contract/IConsola';
import { enterContinue } from './components/EnterContinue';
import { OptionMenu } from './components/OptionMenu.enum';
import { processMenu } from './components/ProcessMenu.enum';
import { OptionsMenu } from './components/ShowMenu.enum';
import { UtilsOptionMenu } from './components/UtilsOpcionMenu';

export class ConsoleAplication implements IConsolaAplications {

  private optionMenu: UtilsOptionMenu;
  private view: ViewConsole;

  constructor(optionMenu: UtilsOptionMenu, view: ViewConsole) {
    this.optionMenu = optionMenu;
    this.view = view;
  }

  start(): void {
    this.showMenu();
  }

  showMenu(): void {
    this.view.clearConsole();

    let opcion: number;

    do {
      this.view.showMessage(OptionMenu.titleMenu);

      this.view.showMenu(OptionsMenu);

      this.view.showMessage(OptionMenu.selectOptionMenu);
      opcion = scanf('%d');

      this.view.showMessage(OptionMenu.enterContinue);
      enterContinue.enter();

      this.view.clearConsole();

      this.getOption(opcion);

    } while (opcion !== MenuOption.exit);
  }

  private getOption(option: number) {
    if (option <= processMenu.option0 || option >= processMenu.option6) {
      this.view.showError(OptionMenu.opcionIncorrecta);
    } else {
      let menuOpciones = {
        option1: this.optionMenu.opcionCreate(option),
        option2: this.optionMenu.opcionRead(option),
        option3: this.optionMenu.opcionUpdate(option),
        option4: this.optionMenu.opcionDelete(option),
        option5: this.optionMenu.opcionExit(option),
      }[option];
    }
  }
}

