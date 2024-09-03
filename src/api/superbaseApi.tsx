import { supabase } from "../database/supabase";

export async function getAllProducts() {
    const { data, error } = await supabase.from("products").select();
    if (error) throw error;
      console.log(data)
    return data;
  }


export async function addNewUser(email:string, password: string){
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  }) 
  if(error) throw error
  console.log('New User was added it!' )
}

export async function login(email:string, password:string){
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if(error) throw error

  const user = data.user
  return user
}