<script lang="ts">
  import { onMount } from "svelte"
  import { Sun, Moon } from "svelte-heros-v2"
  import { ToolbarButton } from "flowbite-svelte"

  let dark: boolean = false

  const toggleTheme = () => {
    dark = window.document.documentElement.classList.toggle("dark")
    localStorage.setItem("color-theme", dark ? "dark" : "light")
  }

  onMount(() => {
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? window.document.documentElement.classList.add("dark")
      : window.document.documentElement.classList.remove("dark")

    dark = window.document.documentElement.classList.contains("dark")
  })
</script>

<ToolbarButton on:click={toggleTheme} aria-label="Dark mode" type="button">
  {#if dark}
    <Sun variation="solid" />
  {:else}
    <Moon variation="solid" />
  {/if}
</ToolbarButton>
