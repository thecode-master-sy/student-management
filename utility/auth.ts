import { get, post } from "@/utility/send";
import { LoginData, SignUpData } from "@/modules/utils.interface";
import { setCookie } from "cookies-next";

export async function getAccessToken(refreshToken: string) {
  const response = await fetch("/api/auth/access-token/", {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });

  return await response.json();
}

export async function login(e: React.FormEvent, data: LoginData) {
  e.preventDefault();
  const { email, password } = data;

  const url = `https://pstudent-management-system-api.herokuapp.com/routes/auth/login`;

  const response = await fetch(url, {
    headers: {
      Authorization: "Basic " + btoa(`${email}:${password}`),
    },
  });

  const responseData = await response.json();
  const { error } = responseData;
  const { message } = { message: "invalid email and password" };

  if (!responseData.error) {
    const { access_token, user, refresh_token } = responseData.data;
    setCookie("refresh_token", `${refresh_token}`, {
      path: "/",
      maxAge: 7776000,
    });

    setCookie("access_token", `${access_token}`, {
      path: "/",
      maxAge: 86400,
    });

    setCookie("id", `${user.id}`, {
      path: "/",
      maxAge: 86400,
    });
  }

  return { error, message };
}

export async function signup(data: SignUpData) {
  const url =
    "https://pstudent-management-system-api.herokuapp.com/routes/auth/sign-up";

  const response = await post(url, data);

  return response;
}
