import { get } from "./send";
import { LoginData } from "@/modules/utils.interface";

export function checkEmpty(value: string) {
  if (value === "") {
    return false;
  } else {
    return true;
  }
}

export function validate(value: string, rule: RegExp) {
  if (rule.test(value)) {
    return true;
  }

  return false;
}

export async function login(e: React.FormEvent, data: LoginData) {
  e.preventDefault();
  const { email, password } = data;

  const url = `/api/login?email=${email}&password=${password}`;

  const response = await get(url);

  return response;
}

export async function signup() {
  console.log("sent");
}
