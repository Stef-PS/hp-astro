import type { Book, CartItem } from "../types"

export class Cart {
  get (): CartItem[] {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }

  store (cart: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart))
  } 

  reset (): void {
    localStorage.setItem('cart', '[]')
  }

  add (book: Book) {
    const cart = this.get()
    const item = cart.find((item: CartItem) => item.isbn === book.isbn)

    if (item) {
      item.quantity++
    } else {
      const { synopsis, ...rest } = book
      cart.push({
        ...rest,
        quantity: 1
      })
    }
    this.store(cart)
  }

  remove (isbn: string) {
    const cart = this.get()
    const index = cart.findIndex((item: CartItem) => item.isbn === isbn)
    if (index > -1) cart.splice(index, 1)
    this.store(cart)
  }
}
