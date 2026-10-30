import type { ProductsResponse } from "../types/Product";

const API_URL =
  "/api/produtos.json";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Erro ao buscar produtos: ${response.status}`);
  }

  const data: ProductsResponse = await response.json();

  return data.products;
}