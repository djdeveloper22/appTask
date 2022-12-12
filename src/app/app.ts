import { ViewConsole } from './core/utils/ViewConsole';
import { TaskManagerInMemory } from './core/services/TaskManagerInMemory';
import { IConsolaAplications } from './domain/contract/IConsola';
import { ConsoleAplication } from './ui/todoConsola';
import { UtilsOptionMenu } from './ui/todoConsola/components/UtilsOpcionMenu';

class Aplications {
  
  private appConsole: IConsolaAplications;

  constructor(appConsole: IConsolaAplications) {
    this.appConsole = appConsole;
  }

  startMyConsole():void{
    this.appConsole.start();
  }
}

const app = new Aplications(new ConsoleAplication( 
  new UtilsOptionMenu(new TaskManagerInMemory, new ViewConsole), 
  new ViewConsole
));

export default app;




