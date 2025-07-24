import { create } from 'zustand';
import { Product } from '../types';

interface ProductsState {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  removeProduct: (id: string) => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: (product) => set((state) => ({ 
    products: [...state.products, product] 
  })),
  updateProduct: (id, updates) => set((state) => ({
    products: state.products.map(product => 
      product.id === id ? { ...product, ...updates } : product
    )
  })),
  removeProduct: (id) => set((state) => ({
    products: state.products.filter(product => product.id !== id)
  })),
}));