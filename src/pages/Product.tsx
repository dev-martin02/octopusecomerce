import { useEffect, useState } from "react";
import { AllProducts } from "../components/products/AllProducts";
import { getAllProducts } from "../api/superbaseApi";
import { UseAppStore } from "../store/productsStore";

export default function Products() {
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
    <div className="border-2 border-gray-300 w-full rounded flex flex-col mt-4 sm:grid gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-gray-400 h-52 sm:h-40 animate-pulse"></div>
      <div className="flex flex-col w-full gap-3">
        <div className="bg-gray-400 h-10 w-full animate-pulse"></div>
        <div className="bg-gray-400 h-5 w-full animate-pulse"></div>
        <div className="bg-gray-400 w-32 h-10 rounded-sm animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <>
      <section className="mt-4 grid gap-2 p-2 grid-cols-2 lg:grid-cols-3 ">
        {fetchingProducts ? (
          Array.from({ length: 10 }).map((_, index) => (
            <LoadingProducts key={index} />
          ))
        ) : (
          <AllProducts />
        )}
      </section>
    </>
  );
}
