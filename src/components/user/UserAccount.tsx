import { Pencil, X } from "lucide-react";
import { UseAppStore } from "../../store/productsStore";
import { FormEvent, useState } from "react";
import { updateAccountInfo } from "../../api/superbaseApi";

export default function UserAccount() {
  type UserObj = {
    id: string;
    name: string;
    email: string;
    zipcode: number | null;
    city: string | null;
    street: string | null;
  };
  const [editUserInfo, setEditUserInfo] = useState<UserObj>();
  const { user } = UseAppStore();
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  function changeEditState(input: boolean) {
    setEditMode(input);
    setEditUserInfo(user[0]);
  }

  async function handleEditForm(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    if (editUserInfo) {
      await updateAccountInfo(editUserInfo!);
      return setLoading(false);
    }

    alert("There was an error updating your info");
  }

  const editForm = (
    <>
      <form onSubmit={handleEditForm}>
        <section className="flex flex-col gap-2 my-8">
          <h3 className="divider divider-start text-lg font-bold mb-1">
            Credentials
          </h3>
          <div className="relative mt-4">
            <input
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-900 transition-colors bg-transparent"
              placeholder=""
              name="name"
              id="name"
              required
              onChange={(e) =>
                //@ts-ignore
                setEditUserInfo((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              value={editUserInfo?.name}
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-900"
            >
              Name
            </label>
          </div>
          <div className="relative mt-4">
            <input
              type="text"
              name="email"
              id="email"
              placeholder=""
              required
              value={editUserInfo?.email}
              onChange={(e) =>
                //@ts-ignore
                setEditUserInfo((prev) => ({ ...prev, email: e.target.value }))
              }
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-900 transition-colors bg-transparent"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-900"
            >
              Email
            </label>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h3 className="divider divider-start text-lg font-bold mb-1">
            Address
          </h3>
          <div className="relative mt-2">
            <input
              type="text"
              name="street"
              id="street"
              placeholder=""
              required
              value={editUserInfo?.street ?? ""}
              onChange={(e) =>
                //@ts-ignore
                setEditUserInfo((prev) => ({ ...prev, street: e.target.value }))
              }
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-900 transition-colors bg-transparent"
            />
            <label
              htmlFor="street"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-900"
            >
              Street
            </label>
          </div>
          <div className="relative mt-4">
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder=""
              required
              value={editUserInfo?.zipcode ?? ""}
              onChange={(e) =>
                //@ts-ignore
                setEditUserInfo((prev) => ({
                  ...prev,
                  zipcode: e.target.value,
                }))
              }
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-900 transition-colors bg-transparent"
            />
            <label
              htmlFor="zipcode"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-900"
            >
              Zip-Code
            </label>
          </div>

          <div className="relative mt-4">
            <input
              type="text"
              name="city"
              id="city"
              placeholder=""
              required
              value={editUserInfo?.city ?? ""}
              onChange={(e) =>
                //@ts-ignore
                setEditUserInfo((prev) => ({
                  ...prev,
                  city: e.target.value,
                }))
              }
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-900 transition-colors bg-transparent"
            />
            <label
              htmlFor="city"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-900"
            >
              City
            </label>
          </div>
        </section>
        {loading ? (
          <span className="loading loading-spinner loading-md">x</span>
        ) : (
          <button
            type="submit"
            className="p-1 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-md transition-all duration-200 shadow-md hover:shadow-lg group w-20 hover:text-white mt-6"
          >
            Edit!
          </button>
        )}
      </form>
    </>
  );

  return user.map(({ name, street, zipcode, email, city }) => (
    <div className="relative p-2 w-full">
      {editMode ? (
        <button
          className="absolute right-3 p-2 bg-red-400 hover:bg-red-500 text-gray-900 rounded-md transition-all duration-200 shadow-md hover:shadow-lg group"
          onClick={() => changeEditState(!editMode)}
        >
          <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      ) : (
        <button
          className="absolute right-3 p-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-md transition-all duration-200 shadow-md hover:shadow-lg group"
          onClick={() => changeEditState(!editMode)}
        >
          <Pencil className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      )}

      <h2 className=" text-2xl font-black">Account Information</h2>
      {editMode ? (
        editForm
      ) : (
        <>
          <section className="mb-6">
            <h3 className="divider divider-start text-lg font-bold">
              Credentials
            </h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                <span className="font-normal">{name}</span>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <span className="font-normal">{email}</span>
              </p>
            </div>
          </section>

          <section>
            <h3 className="divider divider-start text-lg font-bold">Address</h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Street:</span>{" "}
                <span className="font-normal">
                  {street || "Not defined yet"}
                </span>
              </p>
              <p>
                <span className="font-semibold">Zip-Code:</span>{" "}
                <span className="font-normal">
                  {zipcode || "Not defined yet"}
                </span>
              </p>
              <p>
                <span className="font-semibold">City:</span>{" "}
                <span className="font-normal">{city || "Not defined yet"}</span>
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  ));
}
