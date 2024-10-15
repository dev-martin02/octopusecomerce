import { Pencil } from "lucide-react";
import { UseAppStore } from "../../store/productsStore";

export default function UserAccount() {
  const { user } = UseAppStore();

  console.log(user);

  return user.map(({ name, street, zipcode, email, city }) => (
    <>
      <button>
        <Pencil />
      </button>
      <h2>Account Information</h2>

      <h3>Credentials</h3>
      <p>{name}</p>
      <p>{email}</p>

      <h3>Address</h3>
      <p>{street || "Not defined yet"}</p>
      <p>{zipcode || "Not defined yet"}</p>
      <p>{city || "Not defined yet"}</p>
    </>
  ));
}
