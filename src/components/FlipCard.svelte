<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()
  let debouncing = false
  let innerCard: HTMLElement

  function debounce() {
    debouncing = true
    setTimeout(() => debouncing = false, 100)
  }

  export function reset() {
    debounce() // initiating a debounce here to avoid the card to be reflipped by its own flip signal
    innerCard.classList.remove('flip-card__inner--flipped')
  }

  const flipCard = () => {
    if (!debouncing) {
      innerCard.classList.toggle('flip-card__inner--flipped')
      dispatch('flip')
    }
  }
</script>

<article class="flip-card" on:click={flipCard} on:keydown={() => {}}>
  <div class="flip-card__inner" bind:this={innerCard}>
    <div class="flip-card__front">
      <slot name="front" />
    </div>
    <div class="flip-card__back">
      <slot name="back" />
    </div>
  </div>
</article>
