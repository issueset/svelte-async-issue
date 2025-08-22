export class Editor {
  private dom: HTMLElement | null = null;

  mount(node: HTMLElement) {
    this.dom = node;
    this.dom.innerHTML = "Hello, world!";
  }

  unmount() {
    const dom = this.dom;
    this.dom = null;
    if (!dom) {
      return;
    }

    dom.innerHTML = "";
  }
}
