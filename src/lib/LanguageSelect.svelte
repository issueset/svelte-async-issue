<script lang="ts">
  const languages = [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "C",
  ];
</script>

<div class="card" data-card-label="[Svelte] <LanguageSelect>">
  <select>
    {#each languages as language}
      <option value={language}>{language}</option>
    {/each}
  </select>
</div>

<style>
  select {
    width: 100px;
  }
</style>
