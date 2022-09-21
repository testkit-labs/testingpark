<script lang="ts">
  import type { SvelteComponentTyped } from "svelte"
  export let title: string
  export let href: string
  export let icon: typeof SvelteComponentTyped<any>
</script>

<a {href} class="group">
  <div class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 group-hover:scale-105 transition-transform duration-500">
    <div class="flex items-center justify-between">
      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <svelte:component
        this={icon}
        variation="solid"
        class="h-8 w-8 text-gray-500 group-hover:text-blue-500 transition-colors" />
    </div>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
      <slot />
    </p>
  </div>
</a>
