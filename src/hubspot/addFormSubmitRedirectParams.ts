import { AddFormSubmissionCallback } from "./addFormSubmissionCallback";
import DebugLog from "../common/debugLog";

async function AddFormSubmitRedirectParams(redirectUrl: string, debug = true): Promise<void> {
  AddFormSubmissionCallback((data: Record<string, any>, context: Record<string, any>) => {
    const formId = context.formId;
    DebugLog(debug, `Form ID ${formId} submitted`);
    DebugLog(debug, `Redirecting to ${redirectUrl}`);
    DebugLog(debug, `Data: ${JSON.stringify(data)}`);

    const params = new URLSearchParams(data);
    params.append("formId", formId);
    console.log("test");

    if (redirectUrl) {
      DebugLog(debug, `Redirecting to ${redirectUrl} with params ${params.toString()}`);
      window.location.href = redirectUrl + "?" + params.toString();
    }
  });
}

export default AddFormSubmitRedirectParams;
