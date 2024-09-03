import { useCartStore } from "../../store/cartStore";

export default function Cart() {
  const { cartList } = useCartStore();

  const cartProducts = cartList.map(({ name, price, quantity }) => (
    <>
      <h2>Name of product: {name}</h2>
      <p> Price of Product: ${price}.00</p>
      <p>Quantity: {quantity}</p>
    </>
  ));

  return (
    <div>
      {cartList.length === 0 ? (
        <h2> Not item is in the cart!</h2>
      ) : (
        <>
          {cartProducts}
          <button className="btn">Submit</button>
        </>
      )}
    </div>
  );
}
