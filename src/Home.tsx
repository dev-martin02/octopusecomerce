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
      <header className="flex justify-between px-2">
        <h1>Octopus e-commerce</h1>
        <nav className="flex w-36 justify-around">
          <Link to={"cart"} className="btn">
            {cartList.length}
          </Link>
          <Link to={"login"} className="btn">
            Login
          </Link>
        </nav>
      </header>

      {cartSection && <Cart />}
      <section className="mt-4">
        <Products />
      </section>
    </>
  );
}
