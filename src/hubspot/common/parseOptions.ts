import { HubspotMagicalOptions } from "./types";
import ParseOptions from "../../common/parseOptions";
import { defaultDomainKey, defaultRouterKey } from "../../common/constants";

const defaultOptions: HubspotMagicalOptions = {
  domain: "",
  router: "",
  formId: undefined, // Will run on all forms
  debug: true,
};

function ParseHubspotOptions(opts: HubspotMagicalOptions): HubspotMagicalOptions {
  return ParseOptions(defaultOptions, opts) as HubspotMagicalOptions;
}

export default ParseHubspotOptions;
