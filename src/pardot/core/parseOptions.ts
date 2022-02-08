import ParseOptions from "../../core/parseOptions";
import PardotMagicalOptions from "./types/PardotMagicalOptions";
import { defaultDomainKey, defaultRouterKey } from "../../core/constants";

const defaultOptions: PardotMagicalOptions = {
  domainKey: defaultDomainKey,
  routerKey: defaultRouterKey,
  maxRetries: 5,
  debug: true,
} as PardotMagicalOptions;

function ParsePardotOptions(opts: PardotMagicalOptions): PardotMagicalOptions {
  return ParseOptions(defaultOptions, opts) as PardotMagicalOptions;
}

export default ParsePardotOptions;
