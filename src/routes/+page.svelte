<script>
  import { Heading, Hr, P } from "flowbite-svelte"
  import { onMount } from "svelte"
  import { ArrowUpOnSquare, CursorArrowRays, HandRaised, Pencil, PencilSquare } from "svelte-heros-v2"
  import ChallengeCard from "../components/ChallengeCard.svelte"

  onMount(() => {
    console.log("This is a log")
    console.error("This is an error")
    console.warn("This is a warning")
    console.info("This is an info")
  })
</script>

<Heading class="mb-2">Testing Park</Heading>
<P class="max-w-2xl">
  This is a playground to practice and challenge your testing skills. You can choose one of the challenges below and
  create a test for it. At <a
    class="text-blue-700 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400"
    href="https://testkit.app/?ref=testingpark_p">
    Testkit,
  </a>
  we use this tool to test the functionality of our Test Recorder and our main application. The code is
  <a
    class="text-blue-700 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400"
    href="https://github.com/testkit-labs/testingpark"
    target="_blank">
    fully open source on GitHub.
  </a>
</P>

<Hr class="mb-6" />

<Heading tag="h4" class="mb-3">Difficulty: Easy</Heading>

<div class="grid gap-8 grid-cols-1 auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
  <ChallengeCard href="/challenges/easy/clicking" title="Clicking" icon={CursorArrowRays}>
    Click some buttons and links, and check if you get the correct output
  </ChallengeCard>

  <ChallengeCard href="/challenges/easy/typing" title="Typing" icon={PencilSquare}>
    Type some text into different types of inputs and check if you get the correct output
  </ChallengeCard>

  <ChallengeCard href="/challenges/easy/forms" title="Forms" icon={Pencil}>
    Fill out typical forms
  </ChallengeCard>

  <ChallengeCard href="/challenges/easy/uploading" title="Uploading" icon={ArrowUpOnSquare}>
    Upload single or multiple files and check if you get the correct output
  </ChallengeCard>
</div>

<Heading tag="h4" class="mt-12 mb-3">Difficulty: Medium</Heading>

<div class="grid gap-8 grid-cols-1 auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
  <ChallengeCard href="/challenges/medium/kanban" title="Kanban Board" icon={HandRaised}>
    A Kanban Board. Can you drag and drop things to where they belong?
  </ChallengeCard>
</div>

