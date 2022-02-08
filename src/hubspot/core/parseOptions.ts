import { HubspotMagicalOptions } from "./types/HubSpotMagicalOptions";
import ParseOptions from "../../core/parseOptions";

const defaultOptions: HubspotMagicalOptions = {
  domain: "",
  router: "",
  requiredField: "email",
  formId: undefined, // Will run on all forms
  debug: true,
};

function ParseHubspotOptions(opts: HubspotMagicalOptions): HubspotMagicalOptions {
  return ParseOptions(defaultOptions, opts) as HubspotMagicalOptions;
}

export default ParseHubspotOptions;
