function EmitFormSuccessEvent() {
  window.parent.postMessage(
    {
      message: "PARDOT_FORM_SUCCESS",
    },
    "*"
  );
}

export default EmitFormSuccessEvent;
