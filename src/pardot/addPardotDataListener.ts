import { MagicalOptions } from "./types";
import ParseOptions from "./parseOptions";

function AddFinalDataListener(ChiliPiperFunction: (domain: string, router: string, opts: any) => void, options: MagicalOptions = {} as MagicalOptions) {
  const opts = ParseOptions(options);

  if (!ChiliPiperFunction) {
    console.error("ChiliPiperFunction must be set");
    return;
  }

  // @ts-ignore
  window["ChiliPiperLead"] = {} as { [key: string]: any };

  window.addEventListener("message", receiveMessage, false);
  function receiveMessage(event: MessageEvent) {
    // Form data ready, update leadObj
    if (event.data && event.data.message === "PARDOT_DATA_READY" && event.data.data) {
      const leadObj = event.data.data; // Update leadObj
      // Parse query params
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.forEach((value: string, key: string) => {
        leadObj[key] = value;
      });
      // @ts-ignore
      window["ChiliPiperLead"] = leadObj;
    }
    // Form was submitted and validated, call ChiliPiper
    if (event.data && event.data.message === "PARDOT_FORM_SUCCESS") {
      // @ts-ignore
      const leadObj = window["ChiliPiperLead"];

      // Account domain and router name are from Step #1 - no need to change it here
      ChiliPiperFunction(leadObj[opts.domainKey], leadObj[opts.routerKey], {
        map: true,
        lead: leadObj,
      });
    }
  }
}

export default AddFinalDataListener;
