import { TodoDto } from '../../domain/dto/TodoDto';
import { IConsoleRepositorie } from './../../domain/repositories/IConsoleRepositorie';
import { Execepciones } from './Exepciones';

export class TaskManagerInMemory implements IConsoleRepositorie<TodoDto>{

  public payload: Array<TodoDto> = [];

  create(payload: TodoDto): boolean {
    this.payload.push(payload);
    return true;
  }

  read(): TodoDto[] {
    if (!this.payload.length)
      throw new Execepciones('No existen tareas pendientes', 'Realice los pasos correspondientes', 2345);

    return this.payload;
  }

  update(id: number, payload: TodoDto): boolean {
    this.payload.splice(id, 1, payload);
    return true;
  }

  delete(id: number): boolean {
    if (!this.payload.findIndex((e: TodoDto, key) => id !== key))
      throw new Execepciones('No existen el id ingresado', 'Marque el dato correcto', 7777) ;

    this.payload.splice(id, 1);
    return true;
  }
}