<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()
  let innerCard: HTMLElement

  const flipCard = () => {
    innerCard.classList.toggle('flip-card__inner--flipped')
    dispatch('flip')
  }

  export function reset() {
    innerCard.classList.remove('flip-card__inner--flipped')
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
