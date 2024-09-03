import {create} from "zustand";
import { StoreObj } from "../util/interface/storeInterface";

export const useProductsStore = create<StoreObj>((set) => ({
    productList: [],
    updateProductList: (list) => set({productList: list})
    
}))

