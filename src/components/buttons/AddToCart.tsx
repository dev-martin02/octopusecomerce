import { Minus, Plus } from "lucide-react";
import { useCartStore } from "../../store/cartStore";
import { UseAppStore } from "../../store/productsStore";

export function AddToCart({ id }: { id: number }) {
  const { productList } = UseAppStore();
  const { addProductToCart, cartList, increaseProduct, decreaseProduct } =
    useCartStore();

  const productToCart = async (productId: number) => {
    const product = productList.find(({ id }) => id === productId);

    if (product) {
      const { id, name, image_logo, inventory_count, price } = product;

      const cartProduct = {
        id,
        name,
        image_logo,
        inventory_count,
        price,
        quantity: 1,
      };
      return addProductToCart(cartProduct);
    }

    alert("Product not found!!");
  };

  return cartList.find((product) => product.id === id) ? (
    <div className="flex items-center justify-start space-x-2">
      <button
        className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
        onClick={() => decreaseProduct(id)}
      >
        <Minus size={16} />
      </button>
      <span className="font-medium text-gray-700 w-8 text-center">
        {cartList.find((product) => product.id === id)?.quantity || 0}
      </span>
      <button
        className="p-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
        onClick={() => increaseProduct(id)}
      >
        <Plus size={16} />
      </button>
    </div>
  ) : (
    <button
      className="p-2 text-xs max-h-10 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300 font-medium"
      onClick={() => productToCart(id)}
    >
      Add to Cart
    </button>
  );
}
