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
    <>
      <div className="w-44 border-2 px-3 py-1">
        <figure>
          <img src={image_logo} alt="image of the product" />
        </figure>
        <div className="flex flex-col gap-2">
          <h3>{name}</h3>
          <span>${price}.00</span>
          {cartList.find((product) => product.id === id) ? (
            <div className="flex justify-between w-full">
              <button
                className="btn btn-xs"
                onClick={() => increaseProduct(id)}
              >
                Increase
              </button>
              {cartList.map(({ quantity }) => (
                <span>{quantity}</span>
              ))}
              <button
                className="btn btn-xs"
                onClick={() => decreaseProduct(id)}
              >
                Reduce
              </button>
            </div>
          ) : (
            <button className="btn btn-xs" onClick={() => productToCart(id)}>
              Add To cart
            </button>
          )}
        </div>
      </div>
    </>
  ));
}
