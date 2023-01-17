import { TaskManagerAppWeb } from './core/services/TaskManagerAppWeb';
import { myWebApp } from './ui/todoWeb/index';
import { IWebAplication } from "./domain/contract/IWebAplication";
import { UtilsComponents } from './core/utils/UtilsComponent';
import { Events } from './core/utils/Events';
import { FormElements } from './core/constants/FormElements';
import { FunctionElementWeb } from './core/utils/FunctionElementWeb';

class Aplications {

  private appTask: IWebAplication;

  constructor(appTask: IWebAplication) {
    this.appTask = appTask;
  }

  initApp(rootContainer: string): void {
    let obj = new UtilsComponents;
    obj.setRootComponent(rootContainer);
    this.appTask.startInitApp();
  }
}

const app = new Aplications(
  new myWebApp(
    new UtilsComponents,
    new Events,
    new TaskManagerAppWeb,
    new FormElements,
    new FunctionElementWeb(new TaskManagerAppWeb, new FormElements)
  )
);

export default app;




