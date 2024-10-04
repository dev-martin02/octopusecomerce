import { Products } from "./components/products/Products";
import { useEffect, useState } from "react";
import { getAllProducts } from "./api/superbaseApi";
import { UseAppStore } from "./store/productsStore";
// import { useCartStore } from "./store/cartStore";

export default function Home() {
  const { updateProductList } = UseAppStore();
  const [fetchingProducts, setFetchingProducts] = useState(false);

  useEffect(() => {
    async function getProducts() {
      const data = await getAllProducts();
      updateProductList(data);
    }
    setFetchingProducts(true);
    getProducts()
      .catch((e) => console.log(e))
      .finally(() => setFetchingProducts(false));
  }, []);

  const LoadingProducts = () => (
    <div className="flex gap-1 border-2 border-gray-300 p-1 rounded">
      <div className="bg-gray-400 w-40 h-40 animate-pulse"></div>
      <div className="flex flex-col flex-grow gap-2">
        <div className="bg-gray-400 h-10 w-full animate-pulse"></div>
        <div className="bg-gray-400 h-5 w-full animate-pulse"></div>
        <div className="bg-gray-400 w-32 h-10 rounded-sm animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <>
      <section className="mt-4 grid gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {fetchingProducts ? (
          Array.from({ length: 10 }).map((_, index) => (
            <LoadingProducts key={index} />
          ))
        ) : (
          <Products />
        )}
      </section>
    </>
  );
}
