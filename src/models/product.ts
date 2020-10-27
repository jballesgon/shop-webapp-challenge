export interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  stock: number
  isFavorite: boolean
}

export interface ProductRequest {
  id: string
  productName: string
  productDescription: string
  image_url: string
  price: number
  stock: number
  favorite: 0 | '1'
}

export function parseProductRequest(model: ProductRequest): Product {
  return {
    id: model.id,
    name: model.productName,
    description: model.productDescription,
    imageUrl: model.image_url,
    price: model.price,
    stock: model.stock,
    isFavorite: !!model.favorite,
  }
}
