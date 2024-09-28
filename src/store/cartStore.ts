import { create } from "zustand";
import { CartStoreObj } from "../util/interface/storeInterface";

export const useCartStore = create<CartStoreObj>((set) => ({
  cartList: [],

  // Add a product to the cart
  addProductToCart: (product) =>
    set((state) => ({
      cartList: [...state.cartList, { ...product, quantity: 1 }], // Ensure quantity is initialized
    })),

  // Increase the quantity of a product in the cart
  increaseProduct: (productId) =>
    set((state) => ({
      cartList: state.cartList.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseProduct: (productId) =>
    set((state) => ({
      cartList: state.cartList
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
}));
