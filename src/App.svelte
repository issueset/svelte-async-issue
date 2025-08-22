<script lang="ts">
  import Editor from "./lib/Editor.svelte";

  const svelteVersion = import.meta.env.VITE_PUBLIC_SVELTE_VERSION;
  const svelteFlushMode = import.meta.env.VITE_PUBLIC_SVELTE_FLUSH_MODE;
  const svelteExperimentalAsync = import.meta.env.VITE_PUBLIC_SVELTE_EXPERIMENTAL_ASYNC;
</script>

<main>
  <div class="card" style="margin-bottom: 1em; display: flex; flex-direction: column; gap: 0.5em; align-items: flex-start; font-size: 0.75em;">
    <span><strong>Svelte version:</strong> {svelteVersion}</span>
    <span><strong>Svelte experimental async:</strong> {svelteExperimentalAsync}</span>
    <span><strong>Run svelte.flushSync():</strong> {svelteFlushMode === "flush" ? "Yes" : "No"}</span>
  </div>
  <Editor />
</main>

<style>
</style>
