import { Products } from "./components/products/Products";
import { useEffect, useState } from "react";
import { getAllProducts } from "./api/superbaseApi";
import { useProductsStore } from "./store/productsStore";
import { useCartStore } from "./store/cartStore";
import Cart from "./components/cart/Cart";
import { Link } from "react-router-dom";

export default function Home() {
  const { cartList } = useCartStore();
  const { updateProductList } = useProductsStore();
  const [cartSection, setCartSection] = useState(false);

  useEffect(() => {
    async function getProducts() {
      const data = await getAllProducts();
      updateProductList(data);
    }
    getProducts();
  }, []);

  return (
    <>
      <h1>Octopus e-commerce</h1>
      <nav className="flex justify-around">
        <p onClick={() => setCartSection(!cartSection)} className="btn">
          {cartList.length}
        </p>
        <Link to={"login"} className="btn">
          Login
        </Link>
      </nav>

      {cartSection && <Cart />}
      <section className="mt-4 flex flex-col items-center w-">
        <Products />
      </section>
    </>
  );
}
