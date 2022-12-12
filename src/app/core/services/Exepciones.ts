import { IExecepciones } from './../../domain/contract/IInterfaz';

export class Execepciones implements IExecepciones{
  error: string;
  message: string;
  code: number;

  constructor(error: string, message: string, code: number) {
    this.error = error;
    this.message = message;
    this.code = code;
  }

  readMessageError(): void {
    console.log(`Error: ${this.error}, message: ${this.message}, estado: ${this.code}`);
  }

  updateMessageError(): void {
    console.log(`Error: ${this.error}, message: ${this.message}, estado: ${this.code}`);
  }
  
  deleteMessageError(): void {
    console.log(`Error: ${this.error}, message: ${this.message}, estado: ${this.code}`);
  }
}