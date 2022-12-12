
export interface IOptionMenu{
  opcionCreate(op: number): void
  opcionRead(op: number)  : void
  opcionUpdate(op: number): void
  opcionDelete(op: number): void
  opcionExit(op: number)  : void
}