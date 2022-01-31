export async function AddFormSubmissionCallback(callback: (data: Record<string, any>, context: Record<string, any>) => void): Promise<void> {
  window.addEventListener("message", (event) => {
    if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmit") {
      const data: Record<string, any> = {};
      if (typeof event.data.data === "object") {
        for (const key in event.data.data) {
          data[event.data.data[key].name] = event.data.data[key].value;
        }
      }

      const contextInput = document.querySelector('input[name="hs_context"]') as HTMLInputElement;
      const context = contextInput?.value ? JSON.parse(contextInput.value) : {};
      context.formId = event.data.id;
      callback(data, context);
    }
  });
}
