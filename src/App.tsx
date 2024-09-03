import { Login } from "./components/Authentication/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { SignUp } from "./components/Authentication/SignUp";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </>
    </>
  );
}

export default App;
