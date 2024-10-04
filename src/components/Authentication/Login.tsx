import { useEffect, useState } from "react";
import { login } from "../../api/superbaseApi";
import { Link } from "react-router-dom";
import Alert from "../Alert";
import { UseAppStore } from "../../store/productsStore";

export function Login() {
  const { insertUser } = UseAppStore();
  const [loadingState, setLoadingState] = useState(false);
  const [loginErrMessage, setLoginErrMessage] = useState("");
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    setLoadingState(true);
    login(email, password)
      .then((userArray) => {
        if (userArray) {
          if (userArray.length > 0) {
            const user = userArray[0]; // Assuming the first element is the user object
            insertUser(user);
          }
        }
      })
      .catch((e) => setLoginErrMessage(e.message))
      .finally(() => setLoadingState(false));
  };

  const loadingDiv = () => {
    return (
      <div className="absolute inset-0 flex items-center rounded-xl  backdrop-blur-sm justify-center">
        <span className="loading loading-spinner loading-md "></span>
      </div>
    );
  };

  useEffect(() => {
    if (loginErrMessage) {
      const timer = setTimeout(() => {
        setLoginErrMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loginErrMessage]);

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      {loginErrMessage && <Alert message={loginErrMessage} type="error" />}
      <form
        className="w-full relative max-w-md space-y-6 bg-white p-8 rounded-xl shadow-lg  border-2 border-gray-200"
        onSubmit={handleForm}
      >
        {loadingState && loadingDiv()}
        <h2 className="text-xl font-bold text-center text-gray-900">
          Login to your account
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Email address"
          />
          <input
            type="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          Login
        </button>

        <div className="text-center">
          <Link
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Don't have an account? Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
