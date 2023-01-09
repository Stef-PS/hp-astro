import cartStore from '../utils/cartStore'
import { CartItemLine } from './CartItemLine'
import type { CartItem } from '../types'

export class CartList extends HTMLElement {
  private _cart: CartItem[] = []
  private _itemsCount: number = 0

  constructor() {
    super();
    this._cart = cartStore.get()
    this._itemsCount = this._cart.length
  }

  render() {
    const title = document.createElement('h2')
    title.classList.add('cart-title')
    title.innerText = 'Cart'
    const counter = document.createElement('p')
    counter.classList.add('cart-counter')
    counter.innerHTML = `<i>Cart has ${this._itemsCount === 1 ? '1 book' : `${this._itemsCount} books`}.</i>`
    const list = document.createElement('ul')
    list.classList.add('cart-list')
    this._cart.forEach((item: CartItem) => {
      const { title, quantity } = item
      list.appendChild(new CartItemLine(item))
    })
    const total = document.createElement('p')
    total.classList.add('cart-total')
    total.innerHTML = `<b>Total: ${this._cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0).toFixed(2)} €</b>`
    this.innerHTML = ``
    this.appendChild(title)
    this.appendChild(counter)
    this.appendChild(list)
    this.appendChild(total)
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('cart-list', CartList)
