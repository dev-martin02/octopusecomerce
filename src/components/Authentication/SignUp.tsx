import { addNewUser } from "../../api/superbaseApi";

export function SignUp() {
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    addNewUser(email, password);
  };

  return (
    <div>
      <form onSubmit={handleForm} className="flex flex-col gap-1">
        <label className="input input-bordered flex items-center gap-2">
          Email:
          <input type="email" placeholder="Write your email" name="email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Password:
          <input type="text" placeholder="Write your password" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Confirm password:
          <input
            type="text"
            placeholder="Confirm your password"
            name="password"
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
