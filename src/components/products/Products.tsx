import { Minus, Plus } from "lucide-react";
import { useCartStore } from "../../store/cartStore";
import { useProductsStore } from "../../store/productsStore";

export function Products() {
  const { productList } = useProductsStore();
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

  return productList.map(({ name, image_logo, price, id }) => (
    <div className="border-gray-300 shadow-lg rounded-lg  flex gap-2 border-2 ">
      <figure className="w-40">
        <img
          src={image_logo}
          alt="image of the product"
          className="h-40 rounded-lg"
        />
      </figure>
      <div className="flex flex-col gap-2 p-4 flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <span className="text-md font-semibold text-green-600">
          ${price.toFixed(2)}
        </span>
        {cartList.find((product) => product.id === id) ? (
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
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
            onClick={() => productToCart(id)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  ));
}
