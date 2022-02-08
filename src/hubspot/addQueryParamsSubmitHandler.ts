import ParseHubspotOptions from "./core/parseOptions";
import { HubspotMagicalOptions } from "./core/types/HubSpotMagicalOptions";
import CheckFormID from "./core/checkFormId";
import DebugLog from "../core/debugLog";

async function AddQueryParamsSubmitHandler(ChiliPiperFunction: (domain: string, router: string, opts: any) => void, options: HubspotMagicalOptions = {} as HubspotMagicalOptions) {
  const opts = ParseHubspotOptions(options);

  if (!ChiliPiperFunction) {
    console.error("ChiliPiperFunction must be set");
    return;
  }
  if (!opts.domain || !opts.router) {
    console.error("domainKey and routerKey must be set");
    return;
  }

  // Parse query params
  let valid = false;
  const urlParams = new URLSearchParams(window.location.search);
  const data: Record<string, any> = {};
  urlParams.forEach((value: string, key: string) => {
    if (key.toLowerCase().includes(opts.requiredField)) valid = true;
    data[key] = value;
  });
  if (!valid) {
    DebugLog(opts.debug, `Query params do not include required field ${opts.requiredField}`);
    return;
  }

  if (!CheckFormID(opts.formId, data.formId, opts.debug)) return;

  // Check custom conditional logic
  if (typeof opts.withCondition === "function" && !opts.withCondition(data)) {
    return;
  }

  ChiliPiperFunction(opts.domain, opts.router, {
    lead: data,
    map: true,
  });
}

export default AddQueryParamsSubmitHandler;
