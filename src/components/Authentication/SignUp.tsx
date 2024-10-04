import { Link } from "react-router-dom";
import { addNewUser } from "../../api/superbaseApi";
import Alert from "../Alert";

export function SignUp() {
  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    try {
      const data = await addNewUser(email, password, name);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
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
