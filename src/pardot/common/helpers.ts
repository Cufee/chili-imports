// Splits a string into an array of words and returns the first class with CP_ prefix
export function ParsePardotClassNames(className: string): string {
  const field_classes = className.split(" ").filter((value) => !["", "form-field", "pd-hidden", "hidden"].includes(value));
  for (const c of field_classes) {
    if (c.includes("CP_")) {
      return c;
    }
  }
  return "";
}

export function StripText(text: string): string {
  if (!text) return "";
  return text.replace(/\s+/g, " ").trim();
}

export function ToCamelCase(str: string): string {
  if (!str) return "";
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match: string) {
    if (+match === 0) return "";
    return match.toUpperCase();
  });
}

// Strips input and convers to camel case
export function FixFieldName(fieldName: string): string {
  if (!fieldName) return "";
  return ToCamelCase(StripText(fieldName));
}

export function DebugLog(debug: boolean, message: string) {
  if (debug) {
    console.debug(message);
  }
}

export function GetElement(selector: string): HTMLElement {
  let element: HTMLElement;
  element = document.querySelector(selector);
  return element;
}
