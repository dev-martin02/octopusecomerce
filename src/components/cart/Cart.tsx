import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import PurchaseForm from "../form/PurchaseForm";

export default function Cart() {
  const { cartList } = useCartStore();
  const [displayPurchaseForm, setDisplayPurchaseForm] = useState(false);

  const cartProducts = cartList.map(({ name, price, quantity }) => (
    <div className="border-2 border-solid border-black flex w-11/12 justify-around p-3">
      <div>
        <img src="" alt="Image_logo" />
      </div>
      <div>
        <h2 className="font-semibold">{name}</h2>
        <p>${price}.00</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  ));

  return (
    <div>
      {cartList.length === 0 ? (
        <h2> Not item is in the cart!</h2>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {cartProducts}

          <button
            className="btn mt-2"
            onClick={() => setDisplayPurchaseForm(!displayPurchaseForm)}
          >
            Procede to purchase
          </button>
          {displayPurchaseForm && (
            <PurchaseForm setDisplayForm={setDisplayPurchaseForm} />
          )}
        </div>
      )}
    </div>
  );
}
