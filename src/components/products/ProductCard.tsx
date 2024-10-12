import { useParams } from "react-router-dom";
import { UseAppStore } from "../../store/productsStore";
import { Heart } from "lucide-react";
import { AddToCart } from "../buttons/AddToCart";

export default function ProductCard() {
  const { productID } = useParams();
  const { productList } = UseAppStore();

  const product = productList.filter(({ id }) => id === Number(productID));
  return product.map(({ image_logo, name, description, id, brand, price }) => (
    <section className="flex flex-col relative h-screen">
      <figure className="w-full ">
        <img
          src={image_logo}
          alt="image of the product"
          className="h-full w-full rounded-lg"
        />
      </figure>
      <Heart className="absolute left-3 top-4" size={25} />
      <main className="w-full flex flex-col gap-5 p-3">
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
  ));
}
