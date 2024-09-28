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
    <div className="border-black rounded  flex gap-2 border-2 ">
      <figure className="w-40 ">
        <img src={image_logo} alt="image of the product" className="h-40" />
      </figure>
      <div className="flex flex-col gap-2 ">
        <h3 className="text-lg font-extrabold font-serif">{name}</h3>
        <span className="text-md font-semibold">${price}.00</span>

        {cartList.find((product) => product.id === id) ? (
          <div className="flex justify-around w-32  ">
            <button
              className="btn btn-xs bg-red-700 text-white border-red-700 hover:  hover:border-red-800 hover:bg-red-800 rounded"
              onClick={() => decreaseProduct(id)}
            >
              <Minus size={13} color="white" />
            </button>
            {cartList
              .filter((product) => product.id === id)
              .map(({ quantity }) => (
                <div>{quantity}</div>
              ))}
            <button
              className="btn btn-xs bg-green-600 text-white border-green-600 hover:  hover:border-green-800 hover:bg-green-800 rounded"
              onClick={() => increaseProduct(id)}
            >
              <Plus size={13} color="white" />
            </button>
          </div>
        ) : (
          <button className="btn btn-xs" onClick={() => productToCart(id)}>
            Add To cart
          </button>
        )}
      </div>
    </div>
  ));
}
