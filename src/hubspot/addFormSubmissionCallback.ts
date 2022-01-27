export async function AddFormSubmissionCallback(callback: (data: Record<string, any>, context: Record<string, any>) => Promise<void>) {
  window.addEventListener("message", async (event) => {
    if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
      const data: Record<string, any> = event?.data?.data?.reduce((obj: Record<string, any>, item: Record<string, any>) => Object.assign(obj, { [item.name]: item.value }), {});
      const contextInput = document.querySelector('input[name="hs_context"]') as HTMLInputElement;
      const context = contextInput?.value ? JSON.parse(contextInput.value) : {};
      await callback(data, context);
    }
  });
}
