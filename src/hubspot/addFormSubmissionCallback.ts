export async function AddFormSubmissionCallback(callback: (data: Record<string, any>, context: Record<string, any>) => Promise<void>) {
  window.addEventListener("message", async (event) => {
    if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
      const data: Record<string, any> = {};
      if (typeof event.data.data === "object") {
        for (const key in event.data.data) {
          if (event.data.data.hasOwnProperty(key)) {
            data[key] = event.data.data[key];
          }
        }
      }
      const contextInput = document.querySelector('input[name="hs_context"]') as HTMLInputElement;
      const context = contextInput?.value ? JSON.parse(contextInput.value) : {};
      await callback(data, context);
    }
  });
}
