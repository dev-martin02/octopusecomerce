import { Login } from "./components/Authentication/Login";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import { SignUp } from "./components/Authentication/SignUp";
import Cart from "./components/cart/Cart";
import { useCartStore } from "./store/cartStore";
import { ShoppingCart, User } from "lucide-react";
import { UseAppStore } from "./store/productsStore";
import Products from "./pages/Product";
import ProductCard from "./components/products/ProductCard";

function App() {
  const { cartList } = useCartStore();
  const { user } = UseAppStore();

  const getUser = user.map(({ name }) => name);

  return (
    <div className="bg-custom-peach min-h-screen sm:flex sm:flex-col sm:items-center">
      <header className="navbar justify-between px-4 sm:rounded-lg bg-purple-900 sm:w-11/12 sm:mt-2  ">
        <h1 className="font-bold text-2xl text-white">روح العطر</h1>
        <nav className="flex gap-2 mr-2">
          <Link to={"login"} className="btn min-h-1 p-2 max-h-10">
            {user.length !== 0 ? getUser : <User />}
          </Link>
          <Link to={"cart"} className=" btn indicator min-h-1 p-2 max-h-10">
            {cartList.length > 0 ? (
              <>
                <span className="indicator-item badge bg-blue-200 text-white ">
                  {cartList.length}
                </span>
                <ShoppingCart />
              </>
            ) : (
              <ShoppingCart />
            )}
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products/:productID" element={<ProductCard />} />
      </Routes>
    </div>
  );
}

export default App;
