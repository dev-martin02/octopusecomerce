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
    const userProfile = await fetchData(user.id);
    return userProfile;
  }
}

async function fetchData(id: string) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) throw error;

  return data;
}
