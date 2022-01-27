import { AddFormSubmissionCallback } from "./addFormSubmissionCallback";

async function AddFormSubmitRedirectParams(): Promise<void> {
  AddFormSubmissionCallback(async (data: Record<string, any>, context: Record<string, any>) => {
    const formId = context.formId;
    const redirectUrl = context.redirectUrl;

    const params = new URLSearchParams(data);
    params.append("formId", formId);

    if (redirectUrl) {
      window.location.href = redirectUrl + "?" + params.toString();
    }
  });
}

export default AddFormSubmitRedirectParams;
