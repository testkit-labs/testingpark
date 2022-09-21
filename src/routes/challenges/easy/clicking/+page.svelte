<script>
  import { Button } from "flowbite-svelte"

  let clicked = false

  const onClick = () => {
    clicked = true
    setTimeout(() => {
      clicked = false
    }, 3000)
  }
</script>

<Button on:click={onClick} color={clicked ? "green" : "blue"}>
  {#if clicked}
    I've been clicked!
  {:else}
    Click me!
  {/if}
</Button>
