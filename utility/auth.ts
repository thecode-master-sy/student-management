export async function getAccessToken(refreshToken:string) {
  const response = await fetch ("/api/auth/access-token/", {
    method: "GET",
    credentials: "include",
    headers: {
     "content-type": "application/json", 
    }
  })

  return await response.json();
}
