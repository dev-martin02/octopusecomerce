import { supabase } from "../database/supabase";

export async function getAllProducts() {
  const { data, error } = await supabase.from("products").select();
  if (error) throw error;
  return data;
}

async function addUserToTable(name: string, email: string, id: string) {
  const { error } = await supabase.from("users").insert({ id, name, email });
  if (error) return { error };
  return { message: "User was added it!" };
}

export async function addNewUser(
  email: string,
  password: string,
  name: string
) {
  const { data: userInfo, error: userError } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (userError) throw userError;

  if (userInfo.user) {
    const { error: userTableError } = await addUserToTable(
      name,
      email,
      userInfo.user.id
    );
    if (userTableError) return userTableError;
    return "User successfully added to auth and users table!";
  }
}

export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  const user = data.user;
  if (user.id) {
    const userProfile = await fetchUserData(user.id);
    return userProfile;
  }
}

async function fetchUserData(id: string) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) throw error;

  return data;
}

type UserObj = {
  id: string;
  name: string;
  email: string;
  zipcode: number | null;
  city: string | null;
  street: string | null;
};

// Define the function to accept a parameter of type UserObj
export async function updateAccountInfo(editUserInfo: UserObj) {
  // Check if `editUserInfo` contains valid data
  if (!editUserInfo || !editUserInfo.id) {
    console.error("User info is missing or invalid.");
    return;
  }

  try {
    const { data, error } = await supabase
      .from("users")
      .update({
        name: editUserInfo.name,
        email: editUserInfo.email,
        street: editUserInfo.street,
        zipcode: editUserInfo.zipcode,
        city: editUserInfo.city,
      })
      .eq("id", editUserInfo.id); // Update by matching the user's ID

    if (error) {
      console.error("Error updating user info:", error);
    } else {
      console.log("User info updated successfully:", data);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}
