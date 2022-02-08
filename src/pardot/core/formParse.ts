import DebugLog from "../../core/debugLog";
import { ParsePardotClassNames, FixFieldName } from "./helpers";

// Makes a dictionary of form label elements
export function MakeFormLabelDisctionary(form: HTMLFormElement): { [key: string]: string } {
  const labels = form.querySelectorAll("label");
  const labelDictionary: { [key: string]: string } = {};

  labels.forEach((label) => {
    if (label.htmlFor) {
      labelDictionary[label.htmlFor] = label.textContent;
    }
  });

  return labelDictionary;
}

export default function ParseForm(form: HTMLFormElement, debug: boolean): { [key: string]: string } {
  if (!form) return {};
  const formDictionary: { [key: string]: string } = {};

  const labelDictionary = MakeFormLabelDisctionary(form);
  // @ts-ignore
  const elements = form.elements as any[];
  for (const e of elements) {
    // Fix type for hidden elements -- There was some similar logic in the old code, not sure why we need this otherwise
    if (e?.parentElement?.className.includes("hidden")) {
      e.type = "hidden";
    }

    const { fieldName, fieldValue, skipped } = getFieldNameValue(e, labelDictionary);
    if (!fieldName && !skipped) {
      DebugLog(debug, `No field name found for ${e.name}`);
      continue;
    }

    formDictionary[fieldName] = fieldValue;
  }
  return {};
}

function getFieldNameValue(e: any, labels: { [key: string]: string }): { fieldName: string; fieldValue: string; skipped: boolean } {
  let fieldName = "";
  let fieldValue = "";
  switch (e.type) {
    case "submit" || "fieldset" || "button":
      // Ignore
      return { fieldName: "", fieldValue: "", skipped: true };

    case "select":
      // Select
      fieldName = ParsePardotClassNames(e.className) || (e.options?.[0].value as string) || FixFieldName(e.options?.[0].textContent) || labels[e.name];
      fieldValue = e.options?.[e.selectedIndex].value || "";
      break;

    case "radio" || "checkbox":
      e.value = e.checked ? "true" : "false";
    // Fall through to default

    default:
      // Text fields, checkboxes, radios, etc.
      fieldName = ParsePardotClassNames(e.className) || FixFieldName(e.placeholder) || labels[e.name] || labels[e.id] || FixFieldName(e.name);
      fieldValue = e.value || "";
      break;
  }
  return { fieldName, fieldValue, skipped: false };
}
