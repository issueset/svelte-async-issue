<script lang="ts">
  import type { Action } from "svelte/action";
  import LanguageSelect from "./LanguageSelect.svelte";

  const action: Action = (node) => {
    node.innerHTML = `
    <code class="card" data-card-label="[Vanilla] code" contenteditable="true">
      print("Hello, world!");
    </code>
    `;
  };
</script>

<div class="card" data-card-label="[Svelte] CodeBlock.svelte">
  <LanguageSelect />
  <pre class="card" data-card-label="[Svelte -> Vanilla] <pre>" use:action></pre>
</div>
