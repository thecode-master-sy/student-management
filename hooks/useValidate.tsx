export default function useValidate(value: string, rule?: string) {
  if (value === "") {
    return false;
  } else {
    return true;
  }
}
