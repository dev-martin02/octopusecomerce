import { Heart } from "lucide-react";
import { UseAppStore } from "../../store/productsStore";
import { AddToCart } from "../buttons/AddToCart";

export function AllProducts() {
  const { productList } = UseAppStore();

  return productList.map(({ name, image_logo, price, brand, id }) => (
    <div className="border-gray-300 bg-white shadow-lg rounded-lg  flex gap-2 border-2  relative">
      <figure className="w-40">
        <img
          src={image_logo}
          alt="image of the product"
          className="h-full rounded-lg"
        />
      </figure>
      <Heart className="absolute left-1 top-1" size={18} />
      <main className="flex flex-col gap-2 p-4 flex-grow">
        {/* Product Header */}
        <section>
          <span className=" font-thin text-xs">{brand}</span>
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        </section>

        <span className="text-md font-semibold text-indigo-500">
          ${price.toFixed(2)}
        </span>
        <div className="flex gap-4">
          <AddToCart id={id} />
          <button className="px-4 py-2 bg-purple-900 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm font-medium">
            View Product
          </button>
        </div>
      </main>
    </div>
  ));
}
