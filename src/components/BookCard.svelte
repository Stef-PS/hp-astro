<FlipCard on:flip={flipHandler} bind:this={flipCard}>
  <section slot="front" class="book-card__front">
    <h4 class="book-title">{book.title}</h4>
    <figure class="book-cover">
      <img src={book.cover} alt={book.title} width="250" height="360" />
    </figure>
    <p class="book-price">{book.price} €</p>
    <button class="book-cta" on:click={addToCart}>Add to cart</button>
  </section>
  <section slot="back" class="book-card__back">
    <h4 class="book-title">{book.title}</h4>
    <div class="book-synopsis">
      {#each book.synopsis as paragraph}
        <p class="book-paragraph">{paragraph}</p>
      {/each}
    </div>
    <p class="book-price">{book.price} €</p>
    <button
      class="book-cta"
      on:click={addToCart}
      bind:this={backCta}
      on:blur={blurHandler}
    >
      Add to cart
    </button>
  </section>
</FlipCard>

<script lang="ts">
  import FlipCard from './FlipCard.svelte'
  import type { Book } from '../types'

  export let book: Book
  let backCta: HTMLButtonElement
  let flipCard: FlipCard

  const addToCart = (e: MouseEvent) => {
    e.stopPropagation()
    console.log('add to cart:', book.isbn)
  }

  const flipHandler = () => {
    backCta.focus({ preventScroll: true})
  }

  const blurHandler = () => {
    flipCard.reset()
  }
</script>
