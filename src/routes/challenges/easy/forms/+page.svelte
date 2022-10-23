<script>
  import { Checkbox, Radio, Heading, Input, Label, Range, Select, Textarea, Toggle } from "flowbite-svelte"

  let selected = ""
  let minmaxValue = 5
  let stepValue = 2.5

  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
  ]

  let textareaprops = {
    id: "message",
    name: "message",
    label: "Your message",
    rows: 4,
    placeholder: "Leave a comment...",
  }
</script>

<div
  class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 auto-rows-auto">
  <div>
    <Heading tag="h5" class="mb-1">Toggles</Heading>
    <Toggle>Toggle me</Toggle>
    <Toggle checked={true}>Checked toggle</Toggle>
    <Toggle disabled>Disabled toggle</Toggle>
    <Toggle checked disabled>Disabled checked</Toggle>
  </div>

  <div>
    <Heading tag="h5" class="mb-1">Radios</Heading>
    <Radio name="example">Default radio</Radio>
    <Radio name="example" checked={true}>Checked state</Radio>
  </div>

  <div>
    <Heading tag="h5" class="mb-1">Checkboxes</Heading>
    <Checkbox>Default checkbox</Checkbox>
    <Checkbox checked>Checked state</Checkbox>
  </div>

  <div>
    <Heading tag="h5" class="mb-1">Selects</Heading>
    <Label>
      Select an option
      <Select class="mt-2" items={countries} bind:value={selected} />
    </Label>
  </div>

  <div>
    <Heading tag="h5" class="mb-1">Textarea</Heading>
    <Textarea {...textareaprops} />
  </div>

  <div>
    <Heading tag="h5" class="mb-1">Disabled Inputs</Heading>
    <Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
    <Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
  </div>

  <div>
    <Heading tag="h5" class="mb-1">Ranges</Heading>
    <Label>Default range</Label>
    <Range id="range1" />
    <Label>Range steps</Label>
    <Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5" />
    <p>Value: {stepValue}</p>

    <Label>Min-max range</Label>
    <Range id="range-minmax" min="0" max="10" bind:value={minmaxValue} />
    <p>Value: {minmaxValue}</p>
  </div>
</div>
