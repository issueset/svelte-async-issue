import CodeBlock from "./CodeBlock.svelte";
import * as svelte from "svelte";

export class Editor {
  private dom: HTMLElement | null = null;

  mount(node: HTMLElement) {
    console.log("[Editor.ts] mount called");

    this.dom = node;
    this.dom.innerHTML = `<div class="editor">
    
    <p class="card" contenteditable="true">Paragraph 1</p>
    <div class="svelte-component-host" id="svelte-component-host-1"></div>
    <p class="card" contenteditable="true">Paragraph 2</p>
    <div class="svelte-component-host" id="svelte-component-host-2"></div>
    </div>`;

    this.addSvelteComponent(this.dom);

    console.log("[Editor.ts] mount done");
  }

  unmount() {
    console.log("[Editor.ts] unmount called");

    const dom = this.dom;
    this.dom = null;
    if (dom) {
      dom.innerHTML = "";
    }

    console.log("[Editor.ts] unmount done");
  }

  private addSvelteComponent(dom: HTMLElement) {
    console.log("[Editor.ts] addSvelteComponent called");

    const host1 = dom.querySelector("#svelte-component-host-1");
    const host2 = dom.querySelector("#svelte-component-host-2");

    if (!host1 || !host2) {
      throw new Error("Svelte component host not found");
    }

    svelte.mount(CodeBlock, { target: host1 });
    svelte.mount(CodeBlock, { target: host2 });

    console.log("[Editor.ts] addSvelteComponent done");
  }
}
