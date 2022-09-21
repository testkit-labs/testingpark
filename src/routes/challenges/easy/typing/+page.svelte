<script>
  import { Input, Label } from "flowbite-svelte"
</script>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 auto-rows-auto">
  <div>
    <Label for="text-input">Text Input</Label>
    <Input type="text" id="text-input" />
  </div>

  <div>
    <Label for="password-input">Password Input</Label>
    <Input type="password" id="password-input" />
  </div>
  
  <div>
    <Label for="contenteditable">Contenteditable</Label>
    <div id="contenteditable" class="h-10 px-3 py-1.5 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600" contenteditable></div>
  </div>
</div>
