import DebugLog from "../../core/debugLog";

function CheckFormID(expectedFormId: any, formId: string, debug = true): boolean {
  switch (expectedFormId) {
    case "string":
      if (formId !== expectedFormId) {
        DebugLog(debug, `Form ID ${formId} does not match ${expectedFormId}`);
        return false;
      }
      break;
    case "object":
      if (!expectedFormId.includes(formId)) {
        DebugLog(debug, `Form ID ${formId} does not match ${expectedFormId}`);
        return false;
      }
      break;
    default:
      return true;
  }
}

export default CheckFormID;
