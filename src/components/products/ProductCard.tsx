import { useParams } from "react-router-dom";
import { UseAppStore } from "../../store/productsStore";
import { Heart } from "lucide-react";
import { AddToCart } from "../buttons/AddToCart";

export default function ProductCard() {
  const { productID } = useParams();
  const { productList } = UseAppStore();

  const product = productList.filter(({ id }) => id === Number(productID));
  return product.map(
    ({ image_logo, name, description, id, brand, price }, index) => (
      <section
        key={index}
        className="flex flex-col justify-center mt-2 sm:mt-5 sm:flex-row sm:w-11/12 h-screen"
      >
        <figure className="w-full h-full sm:max-h-96 sm:max-w-96 flex justify-center relative ">
          <Heart className="absolute left-3 top-4" size={25} />
          <img
            src={image_logo}
            alt="image of the product"
            className="h-full  object-cover rounded-lg"
          />
        </figure>
        <main className="w-full flex max-h-96 max-w-screen-lg flex-col gap-3 p-3 sm:w-10/12 xl:w-5/12">
          <header>
            <p className="font-thin">{brand}</p>
            <p className="font-bold text-2xl">{name}</p>
          </header>
          <p className=" text-yellow-600 text-2xl font-semibold">
            ${price.toFixed(2)}
          </p>
          <div>
            <button className="ring-purple-900 p-1 rounded-md bg-purple-900 w-20 text-white">
              1oz
            </button>
          </div>
          <p className="w-full">{description}</p>
          <div>
            <AddToCart id={id} />
          </div>
        </main>
      </section>
    )
  );
}
