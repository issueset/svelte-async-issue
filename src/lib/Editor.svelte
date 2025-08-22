<script lang="ts">
  import type { Action } from "svelte/action";
  import { Editor } from "./Editor";

  const action: Action = (node) => {
    console.log("[Editor.svelte] action called");

    const editor = new Editor();
    editor.mount(node);

    return {
      destroy: () => {
        editor.unmount();
      },
    };
  };
</script>

<div class="card" data-card-label="[Svelte] <Editor>">
  <div class="card editor" data-card-label="[Svelte -> Vanilla] <div class='editor'>" use:action></div>
</div>
