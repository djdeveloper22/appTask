
import { ICrudGenerico } from "../contract/ICrudGenerico";
import { TodoDto } from "../dto/TodoDto";

export interface IConsoleRepositorie<T> extends ICrudGenerico<TodoDto>{}