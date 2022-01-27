import DebugLog from "../common/debugLog";
import { AddFormSubmissionCallback } from "./addFormSubmissionCallback";

async function AddFormSubmitRedirectParams(redirectUrl: string, debug = true): Promise<void> {
  AddFormSubmissionCallback(async (data: Record<string, any>, context: Record<string, any>) => {
    const formId = context.formId;
    DebugLog(debug, `Form ID ${formId} submitted`);
    DebugLog(debug, `Redirecting to ${redirectUrl}`);

    const params = new URLSearchParams(data);
    params.append("formId", formId);

    if (redirectUrl) {
      DebugLog(debug, `Redirecting to ${redirectUrl} with params ${params.toString()}`);
      window.location.href = redirectUrl + "?" + params.toString();
    }
  });
}

export default AddFormSubmitRedirectParams;
