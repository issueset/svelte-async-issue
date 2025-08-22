import CodeBlock from "./CodeBlock.svelte";
import * as svelte from "svelte";

const flushMode = import.meta.env.VITE_PUBLIC_SVELTE_FLUSH_MODE;
if (flushMode !== "flush" && flushMode !== "none") {
  throw new Error(
    `Invalid flush mode: ${flushMode}. Must be either 'flush' or 'none'.`
  );
}

export class Editor {
  private dom: HTMLElement | null = null;

  mount(node: HTMLElement) {
    console.log("[Editor.ts] mount called");

    this.dom = node;

    this.updateContent(this.dom);
    this.updateSelection(this.dom);

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

  private updateContent(dom: HTMLElement) {
    dom.innerHTML = `<div class="editor-content card" data-card-label="[Vanilla] <div class='editor-content'>">
    
    <p class="card" data-card-label="[Vanilla] <p>" contenteditable="true">Paragraph 1</p>
    <div class="svelte-component-host card" data-card-label="[Vanilla -> Svelte]" id="svelte-component-host-1"></div>
    <p class="card" data-card-label="[Vanilla] <p>" contenteditable="true">Paragraph 2</p>
    <div class="svelte-component-host card" data-card-label="[Vanilla -> Svelte]" id="svelte-component-host-2"></div>
    </div>`;

    this.addSvelteComponent(
      dom,
      "#svelte-component-host-1",
      "Expect THIS to be selected"
    );
    this.addSvelteComponent(dom, "#svelte-component-host-2", "Hello world!");
  }

  private addSvelteComponent(dom: HTMLElement, selector: string, text: string) {
    console.log("[Editor.ts] addSvelteComponent called. Selector: ", selector);

    const host = dom.querySelector(selector);

    if (!host) {
      throw new Error("Svelte component host not found");
    }

    svelte.mount(CodeBlock, { target: host, props: { text } });

    if (flushMode === "flush") {
      console.log("[Editor.ts] svelte.flushSync()");
      svelte.flushSync();
    }
  }

  private updateSelection(dom: HTMLElement) {
    const code = dom.querySelector("code");
    if (!code) {
      console.warn(
        "[Editor.ts] Unable to find <code> element thus unable to update selection"
      );
      return;
    }

    const text = code.childNodes[0];

    if (text.nodeType !== text.TEXT_NODE) {
      console.warn("[Editor.ts] Unable to find text node in <code> element");
      return;
    }

    const range = document.createRange();

    // Select the text "THIS" in the <code> element
    range.setStart(text, 7);
    range.setEnd(text, 11);

    const selection = window.getSelection();
    if (!selection) {
      console.warn("[Editor.ts] Unable to get window.getSelection()");
      return;
    }

    if (selection.rangeCount > 0) {
      selection.removeAllRanges();
    }

    selection.addRange(range);
  }
}
