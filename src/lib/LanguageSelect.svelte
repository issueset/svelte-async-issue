<script lang="ts">
    const languages = [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "C#",
        "C++",
        "C",
    ]
</script>

<select>
    {#each languages as language}
        <option value={language}>{language}</option>
    {/each}
</select>

<style>
    select {
        width: 100px;
    }
</style>
