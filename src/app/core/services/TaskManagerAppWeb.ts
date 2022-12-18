import { TodoDto } from '../../domain/dto/TodoDto';
import { IConsoleRepositorie } from '../../domain/repositories/IConsoleRepositorie';
import { Execepciones } from './Exepciones';

export class TaskManagerAppWeb implements IConsoleRepositorie<TodoDto>{

  public taskList: Array<TodoDto> = [];

  create(taskList: TodoDto): boolean {
    console.log('entrando al create')
    this.taskList.push(taskList);
    return true;
  }

  read(): TodoDto[] {
    console.log(this.taskList)
    return this.taskList;
  }

  update(id: number, taskList: TodoDto): boolean {
    this.taskList.splice(id, 1, taskList);
    return true;
  }

  delete(id: number): boolean {
    if (!this.taskList.findIndex((e: TodoDto, key) => id !== key))
      throw new Execepciones('No existen el id ingresado', 'Marque el dato correcto', 7777) ;

    this.taskList.splice(id, 1);
    return true;
  }
}