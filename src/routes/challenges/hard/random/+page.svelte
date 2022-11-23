<script>
  let randomTestIdButtonClicked = false
  let randomButtonClicked = false

  function getRandomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  function handleRandomTestIdButtonClick() {
    randomTestIdButtonClicked = true
    setTimeout(() => {
      randomTestIdButtonClicked = false
    }, 5000)
  }

  function handleRandomButtonClick() {
    randomButtonClicked = true
    setTimeout(() => {
      randomButtonClicked = false
    }, 5000)
  }
</script>

<button
  data-test-id={getRandomString()}
  class="find-this-button"
  on:click={handleRandomTestIdButtonClick}
  style="background:blueviolet; border-radius: 6px; padding: 8px 12px;">
  {randomTestIdButtonClicked ? "You found me!" : "Random test id with static class"}
</button>

<button
  data-test-id={getRandomString()}
  class={getRandomString()}
  on:click={handleRandomButtonClick}
  style="background:blueviolet; border-radius: 6px; padding: 8px 12px; margin-left: 20px;">
  {randomButtonClicked ? "You found me?!?!" : "Random test id with random class"}
</button>
