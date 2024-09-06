import { useCartStore } from "../../store/cartStore";
import { useProductsStore } from "../../store/productsStore";

export function Products() {
  const { productList } = useProductsStore();
  const { addProductToCart, cartList, increaseProduct } = useCartStore();

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
      <div className="w-44">
        <figure>
          <img src={image_logo} alt="image of the product" />
        </figure>
        <div className="flex flex-col">
          <h3>{name}</h3>
          <span>{price}</span>
          {cartList.find((product) => product.id === id) ? (
            <>
              <p>Quantity</p>
              <button
                className="btn btn-xs"
                onClick={() => increaseProduct(id)}
              >
                Increase
              </button>
              <button className="btn btn-xs">Reduce</button>
            </>
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
