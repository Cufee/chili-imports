import ParseHubspotOptions from "./common/parseOptions";
import { HubspotMagicalOptions } from "./common/types";
import CheckFormID from "./common/checkFormId";

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
  const urlParams = new URLSearchParams(window.location.search);
  const data: Record<string, any> = {};
  urlParams.forEach((value: string, key: string) => {
    data[key] = value;
  });

  if (!CheckFormID(opts.formId, data.formId, opts.debug)) return;

  ChiliPiperFunction(opts.domain, opts.router, {
    lead: data,
    map: true,
  });
}

export default AddQueryParamsSubmitHandler;
