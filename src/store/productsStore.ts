import { create } from "zustand";
import { StoreObj } from "../util/interface/storeInterface";

export const UseAppStore = create<StoreObj>((set) => ({
  productList: [],
  updateProductList: (list) => set({ productList: list }),
  user: [],
  insertUser: (userObj) => set({ user: [userObj] }),
  logOutUser: () => set({ user: [] }),
}));
