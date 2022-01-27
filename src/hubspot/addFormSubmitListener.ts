import DebugLog from "../common/debugLog";
import { AddFormSubmissionCallback } from "./addFormSubmissionCallback";
import ParseHubspotOptions from "./common/parseOptions";
import { HubspotMagicalOptions } from "./common/types";
import CheckFormID from "./common/checkFormId";

async function AddFormSubmitListener(ChiliPiperFunction: (domain: string, router: string, opts: any) => void, options: HubspotMagicalOptions = {} as HubspotMagicalOptions) {
  const opts = ParseHubspotOptions(options);

  if (!ChiliPiperFunction) {
    console.error("ChiliPiperFunction must be set");
    return;
  }
  if (!opts.domain || !opts.router) {
    console.error("domainKey and routerKey must be set");
    return;
  }

  DebugLog(opts.debug, "Adding form submit listener");
  AddFormSubmissionCallback(async (data: Record<string, any>) => {
    if (!CheckFormID(opts.formId, data.id, opts.debug)) return;

    ChiliPiperFunction(opts.domain, opts.router, {
      lead: data,
      map: true,
    });
  });
}

export default AddFormSubmitListener;
