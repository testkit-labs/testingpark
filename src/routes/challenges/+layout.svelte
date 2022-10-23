<script>
  import { Button } from "flowbite-svelte"
  import { Home } from "svelte-heros-v2"
</script>

<div class="mb-5">
  <Button color="alternative" size="xs" href="/">
    <Home class="h-4 mr-1 -ml-1" />
    Back to home
  </Button>
</div>

<div class="h-full w-full">
  <slot />
</div>
