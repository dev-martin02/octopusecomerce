import { Products } from "./components/products/Products";
import { useEffect } from "react";
import { getAllProducts } from "./api/superbaseApi";
import { useProductsStore } from "./store/productsStore";
import { useCartStore } from "./store/cartStore";

export default function Home() {
  const { updateProductList } = useProductsStore();

  useEffect(() => {
    async function getProducts() {
      const data = await getAllProducts();
      updateProductList(data);
    }
    getProducts();
  }, []);

  return (
    <>
      <section className="mt-4">
        <Products />
      </section>
    </>
  );
}
