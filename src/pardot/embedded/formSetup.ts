import PardotMagicalOptions from "../core/types/PardotMagicalOptions";
import { GetElement } from "../core/helpers";
import ParsePardotOptions from "../core/parseOptions";
import ParseForm from "../core/formParse";
import DebugLog from "../../core/debugLog";

async function FormSetup(formID: string, subdomain: string, router: string, options: PardotMagicalOptions = {} as PardotMagicalOptions) {
  await addFormEventListenerWithRetry(formID, subdomain, router, options);
}

async function addFormEventListenerWithRetry(formID: string, subdomain: string, router: string, options: PardotMagicalOptions = {} as PardotMagicalOptions, tries = 0) {
  const opts = ParsePardotOptions(options);

  if (tries > opts.maxRetries) {
    DebugLog(opts.debug, `Max retries reached, giving up.`);
    return;
  }

  tries++;
  const form = GetElement(formID) as HTMLFormElement;
  if (!form) {
    setTimeout(() => {
      addFormEventListenerWithRetry(formID, subdomain, router, options);
    }, 1000);
    return;
  }

  const ok = addFormEventListener(form, subdomain, router, opts);
  if (!ok) {
    console.error(`Failed to add event listener to form ${formID}`);
  }
  return;
}

// Get element by selector with retry
function addFormEventListener(form: HTMLFormElement, subdomain: string, router: string, options: PardotMagicalOptions): boolean {
  if (!form) return false;
  if (!subdomain || !router) {
    console.error("Subdomain and router must be set");
    return false;
  }

  form.addEventListener("submit", (e) => {
    const lead = ParseForm(form, options.debug);
    lead[options.domainKey] = subdomain;
    lead[options.routerKey] = router;
    // Post DOM message
    window.parent.postMessage(
      {
        message: "PARDOT_DATA_READY",
        data: lead,
      },
      "*"
    );
    DebugLog(options.debug, "PARDOT_DATA_READY fired");
  });
  return true;
}

export default FormSetup;
