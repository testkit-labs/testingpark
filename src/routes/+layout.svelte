<script>
  import "../app.postcss"
  import { Button, Heading, Hr, P, Toolbar, ToolbarButton, ToolbarGroup } from "flowbite-svelte"
  import { ArrowTopRightOnSquare } from "svelte-heros-v2"
  import Logo from "../atoms/Logo.svelte"
  import DarkModeSwitch from "../atoms/DarkModeSwitch.svelte"
</script>

<Toolbar class="!rounded-none">
  <ToolbarGroup>
    <Logo class="h-4" />
  </ToolbarGroup>
  <ToolbarGroup>Testing Park - Practice and challenge your testing skills</ToolbarGroup>
  <svelte:fragment slot="end">
    <DarkModeSwitch />
  </svelte:fragment>
</Toolbar>

<div class="p-4 lg:px-6 xl:px-8 xl:py-6 h-full w-full">
  <slot />
</div>

<Toolbar class="!rounded-none fixed bottom-0 left-0 right-0">
  <ToolbarGroup>
    <Logo class="h-4" />
  </ToolbarGroup>
  <ToolbarGroup>
    Want to go fully code-less?
    <Button class="flex items-center ml-2" size="xs" color="alternative" href="https://testkit.app/?ref=testingpark_footer" target="_blank">
      Read more
      <ArrowTopRightOnSquare class="w-4 h-4 ml-1" />
    </Button>
  </ToolbarGroup>
  <svelte:fragment slot="end" />
</Toolbar>
