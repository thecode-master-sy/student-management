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

export function protect(string: string) {
  const specialChars: any = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;",
  };

  return string.replace(/[&<>"'`=\/]/g, function (char) {
    return specialChars[char];
  });
}
