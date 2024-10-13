import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import PurchaseForm from "../form/PurchaseForm";
import { ShoppingCart, DollarSign, Truck, CheckCircle } from "lucide-react";

export default function Cart() {
  const { cartList } = useCartStore();
  const [displayPurchaseForm, setDisplayPurchaseForm] = useState(false);

  const cartProducts = cartList.map(({ name, price, quantity, image_logo }) => (
    <div className="border border-gray-200 rounded-lg shadow-md flex items-center w-full max-w-2xl mx-auto p-4 transition-shadow hover:shadow-lg">
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

  const totalCost = () => {
    // Calculate the product cost based on quantity and price
    const productCost = cartList.reduce(
      (acc, { quantity, price }) => acc + quantity * price,
      0
    );

    const SHIPPING_COST = productCost > 100 ? 0 : 50;
    const TAX_RATE = 0.07;

    // Calculate the tax and total cost
    const taxCost = parseFloat((productCost * TAX_RATE).toFixed(2));
    const totalCost = parseFloat(
      (productCost + SHIPPING_COST + taxCost).toFixed(2)
    );

    return (
      <div className="w-full">
        <div className="flex items-center mb-2">
          <ShoppingCart className="text-gray-600 mr-2" />
          <p className="text-lg font-semibold">
            Order Price:{" "}
            <span className="text-gray-600">${productCost.toFixed(2)}</span>
          </p>
        </div>

        <div className="flex items-center mb-2">
          <DollarSign className="text-gray-600 mr-2" />
          <p className="text-lg font-semibold">
            Tax (7%):{" "}
            <span className="text-gray-600">${taxCost.toFixed(2)}</span>
          </p>
        </div>

        <div className="flex items-center mb-2">
          <Truck className="text-gray-600 mr-2" />
          <p className="text-lg font-semibold">
            Shipping:{" "}
            <span className="text-gray-600">${SHIPPING_COST.toFixed(2)}</span>
          </p>
        </div>

        <hr className="my-2" />

        <div className="flex items-center">
          <CheckCircle className="text-blue-600 mr-2" />
          <p className="text-xl font-bold">
            Total:{" "}
            <span className="text-blue-600">${totalCost.toFixed(2)}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {cartList.length === 0 ? (
        <h2> Not item is in the cart!</h2>
      ) : (
        <div className="flex flex-col justify-center gap-2 items-center sm:flex-row sm:items-start">
          <div className="w-11/12 flex flex-col gap-2 sm:w-96 ">
            {cartProducts}
          </div>
          <div className="p-4 border rounded-lg shadow-lg bg-white flex flex-col gap-5 w-11/12 sm:w-60">
            {totalCost()}
            <button
              className="btn btn-primary text-white"
              onClick={() => setDisplayPurchaseForm(!displayPurchaseForm)}
            >
              Proceed to purchase
            </button>
          </div>
          {displayPurchaseForm && (
            <PurchaseForm setDisplayForm={setDisplayPurchaseForm} />
          )}
        </div>
      )}
    </div>
  );
}
