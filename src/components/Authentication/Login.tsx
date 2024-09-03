import { login } from "../../api/superbaseApi";
import { Link } from "react-router-dom";

export function Login() {
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    login(email, password).then((user) => console.log(user));
  };

  return (
    <>
      <form className="flex flex-col gap-1" onSubmit={handleForm}>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="email"
            placeholder="Please write your email"
            name="email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Password:
          <input
            type="text"
            placeholder="Please write your email"
            name="password"
          />
        </label>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <Link to="signup" className="btn">
        Sign Up
      </Link>
    </>
  );
}
