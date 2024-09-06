import { useCartStore } from "../../store/cartStore";

export default function Cart() {
  const { cartList } = useCartStore();

  const cartProducts = cartList.map(({ name, price, quantity }) => (
    <div className="border-2 border-solid border-black flex w-11/12 justify-center p-3">
      <div>
        <img src="" alt="Image_logo" />
      </div>
      <h2>{name}</h2>
      <p>${price}.00</p>
      <p>Quantity: {quantity}</p>
    </div>
  ));

  return (
    <div>
      {cartList.length === 0 ? (
        <h2> Not item is in the cart!</h2>
      ) : (
        <div className="flex flex-col justify-center items-center h-lvh">
          {cartProducts}
          <button className="btn">Submit</button>
        </div>
      )}
    </div>
  );
}
