//politica de alto nivel
export interface ICrudGenerico<T>{
  create(payload: T): boolean;
  read(): T[];
  update(id: number, payload: T): boolean;
  delete(id: number): boolean;
}