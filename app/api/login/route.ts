import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
import { setCookie } from "cookies-next";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const email = url.searchParams.get("email") || "";
  const password = url.searchParams.get("password") || "";

  const apiUrl = `https://pstudent-management-system-api.herokuapp.com/routes/auth/login`;

  const res = await fetch(apiUrl, {
    headers: {
      Authorization: "Basic " + btoa(`${email}:${password}`),
    },
  });

  const data = await res.json();

  if (data.error) {
    const { error } = data;
    const { message } = { message: "invalid email and password" };

    return new Response(JSON.stringify({ error, message }));
  } else {
    const { access_token, user, refresh_token } = data.data;

    //set cookie here
    setCookie("refresh_token", `${refresh_token}`, {
      path: "/",
      maxAge: 86400,
    });

    const responseInit = {
      headers: {
        "Set-Cookie": `access_token=${access_token}; Path=/; Max-Age=7776000`,
        "Content-Type": "application/json",
      },
    };

    const responseBody = JSON.stringify({ user });

    return new Response(responseBody, responseInit);
  }
}
