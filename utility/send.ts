export async function get(url: string) {
  const response = await fetch(url);

  const responseData = await response.json();

  return responseData;
}

export async function post(url: string, data: {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  return responseData;
}
