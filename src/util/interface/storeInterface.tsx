export type StoreObj = {
  productList: Product[];
  updateProductList: (list: Product[]) => void;
  user: UserObj[];
  insertUser: (obj: UserObj) => void;
  logOutUser: () => void;
};

export type CartStoreObj = {
  cartList: CartProductOjb[];
  addProductToCart: (product: CartProductOjb) => void;
  increaseProduct: (productId: number) => void;
  decreaseProduct: (productId: number) => void;
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

type UserObj = {
  id: string;
  name: string;
  email: string;
  zipcode: number | null;
  city: string | null;
  street: string | null;
};
