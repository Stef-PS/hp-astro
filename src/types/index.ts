export interface Book {
  isbn: string
  title: string
  cover: string
  price: number
  synopsis?: string[]
}

export interface CartItem {
  isbn: string
  title: string
  cover: string
  price: number
  quantity: number
}
