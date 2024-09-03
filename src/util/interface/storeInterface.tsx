export type StoreObj = {
  productList: Product[];
  updateProductList: (list: Product[]) => void;
};

export type CartStoreObj = {
  cartList: CartProductOjb[];
  addProductToCart: (product: CartProductOjb) => void;
  increaseProduct: (productId: number) => void;
};

type Product = {
  brand: string;
  category: string;
  description: string;
  id: number;
  image_logo: string;
  image_url: string;
  inventory_count: number;
  name: string;
  price: number;
};

type CartProductOjb = {
  id: number;
  image_logo: string;
  name: string;
  inventory_count: number;
  price: number;
  quantity: number;
};
