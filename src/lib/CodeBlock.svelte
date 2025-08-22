<script lang="ts">
  import type { Action } from "svelte/action";
  import LanguageSelect from "./LanguageSelect.svelte";

  interface Props {
    text: string;
  }

  let { text }: Props = $props();

  const action: Action = (node) => {
    console.log("[CodeBlock.svelte] action called");
    node.innerHTML = `<code class="card" data-card-label="[Vanilla] <code>" contenteditable="true">${text}</code>`;
    console.log("[CodeBlock.svelte] action done");
  };
</script>

<div class="card" data-card-label="[Svelte] <CodeBlock>">
  <LanguageSelect />
  <pre
    class="card"
    data-card-label="[Svelte -> Vanilla] <pre>"
    use:action></pre>
</div>
