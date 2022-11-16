<script>
  import { Button } from "flowbite-svelte"
  import { onMount } from "svelte"

  let clicked = false

  onMount(() => {
    console.log("You're now in the clicking challenge")
  })

  const onClick = () => {
    console.log("Clicked!")
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
