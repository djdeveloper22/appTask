export class Validator{
  validarInput(){
    let inputs: any= document.getElementsByName('moduloTarea');
    for (let i = 0; i < inputs.length; i++) {
      console.log(i)
    }
  }
}