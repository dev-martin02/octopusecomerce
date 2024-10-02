import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import PurchaseForm from "../form/PurchaseForm";

export default function Cart() {
  const { cartList } = useCartStore();
  const [displayPurchaseForm, setDisplayPurchaseForm] = useState(false);

  const cartProducts = cartList.map(({ name, price, quantity, image_logo }) => (
    <div className="border border-gray-200 rounded-lg shadow-md flex items-center w-full max-w-2xl mx-auto my-4 p-4 transition-shadow hover:shadow-lg">
      <div className="w-24 h-24 mr-6">
        <img
          src={image_logo || "/api/placeholder/96/96"}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-lg font-medium text-green-600 mb-1">
          ${price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
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

          <p>Total:</p>
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
