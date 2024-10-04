import { Link, useNavigate } from "react-router-dom";
import { addNewUser } from "../../api/superbaseApi";
import Alert from "../Alert";
import { useEffect, useState } from "react";

export function SignUp() {
  const [alertMessage, setAlertMessage] = useState("");
  const [addingUser, setAddingUser] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    try {
      setAddingUser(true);
      if (password !== userPassword) {
        return setAlertMessage("Passwords do not match!");
      }
      await addNewUser(email, password, name);
      navigate("/login");
    } catch (e) {
      if (e instanceof Error) {
        if (e.message) {
          setAlertMessage(e.message);
        } else {
          setAlertMessage("An unexpected error occurred.");
        }
      }
    } finally {
      setAddingUser(false);
    }
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const loadingDiv = () => {
    return (
      <div className="absolute inset-0 flex items-center rounded-xl  backdrop-blur-sm justify-center">
        <span className="loading loading-spinner loading-md "></span>
      </div>
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {alertMessage && <Alert message={alertMessage} type="error" />}
      <div className=" relative w-full max-w-md bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
        {addingUser && loadingDiv()}
        <h2 className="text-xl font-bold text-center text-gray-900 mb-6">
          Create your account
        </h2>
        <form onSubmit={handleForm} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700 mb-1">
              Name:
            </span>
            <input
              type="text"
              name="name"
              placeholder="Write your name"
              className="input input-bordered w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700 mb-1">
              Email:
            </span>
            <input
              type="email"
              name="email"
              placeholder="Write your email"
              className="input input-bordered w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700 mb-1">
              Password:
            </span>
            <input
              type="password"
              name="password"
              placeholder="Write your password"
              className="input input-bordered w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-700 mb-1">
              Confirm password:
            </span>
            <input
              type="password"
              name="confirmPassword"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
              placeholder="Confirm your password"
              className="input input-bordered w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <button
            type="submit"
            className="btn w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out mt-4"
          >
            Submit
          </button>
        </form>
        <div className="text-center mt-4">
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
