<script lang="ts">
  import type { Action } from "svelte/action";
  import LanguageSelect from "./LanguageSelect.svelte";

  const action: Action = (node) => {};
</script>

<div class="card" data-card-label="[Svelte] CodeBlock.svelte">
  <LanguageSelect />
  <pre class="card" data-card-label="[Vanilla] <pre>" use:action></pre>
</div>
