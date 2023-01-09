import type { CartItem } from '../types'

export class CartItemLine extends HTMLElement {
  constructor(private _item: CartItem) {
    super();
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const { title, quantity, price, cover } = this._item
    const itemLine = document.createElement('li')
    itemLine.classList.add('cart-item')
    const imageBlock = document.createElement('img')
    imageBlock.classList.add('cart-item__image')
    imageBlock.src = cover
    imageBlock.alt = title
    imageBlock.width = 50
    itemLine.appendChild(imageBlock)
    const titleBlock = document.createElement('h5')
    titleBlock.classList.add('cart-item__title')
    titleBlock.innerText = title
    itemLine.appendChild(titleBlock)
    const quantityBlock = document.createElement('div')
    quantityBlock.classList.add('cart-item__quantity')
    quantityBlock.innerText = `Qty: ${quantity}`
    itemLine.appendChild(quantityBlock)
    const unitPriceBlock = document.createElement('div')
    unitPriceBlock.classList.add('cart-item__unit-price')
    unitPriceBlock.innerText = `x ${price.toFixed(2)} €`
    itemLine.appendChild(unitPriceBlock)
    const totalPriceBlock = document.createElement('div')
    totalPriceBlock.classList.add('cart-item__total-price')
    totalPriceBlock.innerHTML = `= <b>${(price * quantity).toFixed(2)} €</b>`
    itemLine.appendChild(totalPriceBlock)
    const removeButton = document.createElement('div')
    removeButton.classList.add('cart-item__remove')
    removeButton.innerText = '🗑️'
    itemLine.appendChild(removeButton)
    this.innerHTML = ''
    this.appendChild(itemLine)
  }
}

customElements.define('cart-item-line', CartItemLine)
