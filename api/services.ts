import { IProduct } from "../Types/IProduct"
import { client } from "./client"

export const getProductWithLimit = async (
  productsNumber = 10,
): Promise<IProduct[]> => {
  try {
    const { data } = await client.get<IProduct[]>(
      `/products?limit=${productsNumber}`,
    )
    return data
  } catch (error) {
    return []
  }
}

export const getProductById = async (
  id: string,
): Promise<IProduct | undefined> => {
  if (!id) {
    return undefined
  }
  try {
    const { data } = await client.get<IProduct>(`/products/${id}`)
    return data
  } catch (error) {
    return undefined
  }
}
