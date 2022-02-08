import { HubspotMagicalOptions } from "./types/HubSpotMagicalOptions";
import ParseOptions from "../../core/parseOptions";

const defaultOptions: HubspotMagicalOptions = {
  requiredQueryField: "email",
  debug: true,
} as HubspotMagicalOptions;

function ParseHubspotOptions(opts: HubspotMagicalOptions): HubspotMagicalOptions {
  return ParseOptions(defaultOptions, opts) as HubspotMagicalOptions;
}

export default ParseHubspotOptions;
