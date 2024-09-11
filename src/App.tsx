import { Login } from "./components/Authentication/Login";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import { SignUp } from "./components/Authentication/SignUp";
import Cart from "./components/cart/Cart";
import { useCartStore } from "./store/cartStore";

function App() {
  const { cartList } = useCartStore();

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
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
