import { Heart } from "lucide-react";
import { UseAppStore } from "../../store/productsStore";
import { AddToCart } from "../buttons/AddToCart";
import { Link } from "react-router-dom";

export function AllProducts() {
  const { productList } = UseAppStore();

  return productList.map(({ name, image_logo, price, brand, id }) => (
    <div className="border-gray-50 bg-gray-100 shadow-lg rounded-lg flex flex-col sm:flex-row gap-2 border-2  relative">
      <figure className="w-full sm:w-40">
        <img
          src={image_logo}
          alt="image of the product"
          className="h-full w-full rounded-lg"
        />
      </figure>
      <Heart className="absolute left-1 top-1" size={18} />
      <main className="flex flex-col gap-2 p-1 h-full ">
        {/* FLEX GROW? */}
        {/* Product Header */}
        <section>
          <span className="font-thin text-xs">{brand}</span>
          <h3 className="text-md md:text-lg font-bold text-gray-800">{name}</h3>
        </section>

        <span className="text-md font-semibold text-yellow-600">
          ${price.toFixed(2)}
        </span>
        <div className="flex flex-col-reverse md:flex-row gap-1 h-full">
          <AddToCart id={id} />
          <Link
            to={`${id}`}
            className="p-2 max-h-10 bg-purple-900 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 text-xs font-medium hidden sm:inline-flex justify-center items-center"
          >
            View Product
          </Link>
        </div>
      </main>
    </div>
  ));
}
