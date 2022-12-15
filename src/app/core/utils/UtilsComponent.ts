export class UtilsComponents {
  async setRootComponent(selector: string): Promise<any> {
    let root: HTMLElement = document.getElementById(selector);
    const url = `/src/app/ui/todoWeb/appTask.html`;
    const datosUrl = await fetch(url);
    const linkUrl = await datosUrl.text();
    return root.innerHTML = linkUrl;
  }

  async setComponent(selector: string, template: string): Promise<any> {
    let root: HTMLElement = document.getElementById(selector);
    const url = `/src/app/ui/todoWeb/components/${template}.html`;
    const datosUrl = await fetch(url);
    const linkUrl = await datosUrl.text();
    return root.innerHTML = linkUrl
  }
}