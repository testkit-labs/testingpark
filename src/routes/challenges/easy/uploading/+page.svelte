<script>
  import { Fileupload, Label } from "flowbite-svelte"
  import Dropzone from "svelte-file-dropzone"

  let files = {
    accepted: [],
    rejected: []
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }
</script>

<Label for="simple" class="mb-0.5">Simple File Input</Label>
<Fileupload id="simple" />

<Dropzone on:drop={handleFilesSelect} class="h-96" />
<ol>
  {#each files.accepted as item}
    <li>{item.name}</li>
  {/each}
</ol>
