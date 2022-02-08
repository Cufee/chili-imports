import DebugLog from "../core/debugLog";
import { AddFormSubmissionCallback } from "./addFormSubmissionCallback";
import ParseHubspotOptions from "./core/parseOptions";
import { HubspotMagicalOptions } from "./core/types/HubSpotMagicalOptions";
import CheckFormID from "./core/checkFormId";

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

    // Check custom conditional logic
    if (typeof opts.withCondition === "function" && !opts.withCondition(data)) {
      return;
    }

    ChiliPiperFunction(opts.domain, opts.router, {
      ...(opts.passthroughOptions || {}),
      lead: data,
      map: true,
    });
  });
}

export default AddFormSubmitListener;
