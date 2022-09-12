<script>
    import { onMount } from "svelte";
    import { Configuration } from "./_util/config";
import { selectedFile } from "./_util/stores";
    
    /**
     * Asynchronous read of the config yaml file
     * gets all publications stored in the yaml
     */
    let filelist = [];
    onMount(async () => {
        filelist = await Configuration.getInstance().getConfig();
        console.log(filelist);
    });

    function loadFile(file) {
        selectedFile.set(file);
    }

</script>

<div class="title">Contents</div>

<ul>
    {#each filelist as file, i}
        <li on:click={() => loadFile(file)}>- {file.identifier} <span class="file">{file.file}</span></li>
    {/each} 
</ul>

<style>
    .title {
        font-size: 1.7em;
        font-weight: lighter;
    }

    ul {
        padding: 0;
    }

    li {
        cursor: pointer;
        list-style-type: none;
    }

    li:hover {
        font-weight: bold;
    }

    .file {
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.7em;
        color: rgb(64, 129, 64);
    }
</style>