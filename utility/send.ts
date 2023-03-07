export async function get(url: string) {
  const response = await fetch(url);

  const responseData = await response.json();

  return responseData;
}
