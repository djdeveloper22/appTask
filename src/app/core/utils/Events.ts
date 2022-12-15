export class Events {
  click(selector: string, action: any): void {
    document.querySelector(selector).addEventListener('click', action);
  }
}