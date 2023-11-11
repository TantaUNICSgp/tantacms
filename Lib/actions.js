"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
export async function Login(data) {
  const email = data.get("email");
  const password = data.get("password");
  const response = await fetch("http://127.0.0.1:8000/accounts/login/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const res = await response.json();
  if (res.accessToken) {
    cookies().set("accessToken", res.accessToken);
    redirect("/Dashboard/Divisions");
  }
  return res;
}
export async function AddUserAction(data) {
  const username = data.get("username");
  const password = data.get("password");
  const first_name = data.get("first_name");
  const last_name = data.get("last_name");
  const is_admin = data.get("is_admin");
  const response = await fetch("http://127.0.0.1:8000/accounts/", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      first_name,
      last_name,
      is_admin,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("key").value}`,
    },
  });
  const res = await response.json();
  return res;
}