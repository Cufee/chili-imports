import { PardotMagicalOptions } from "./types";
import ParseOptions from "../../common/parseOptions";
import { defaultDomainKey, defaultRouterKey } from "../../common/constants";

const defaultOptions: PardotMagicalOptions = {
  domainKey: defaultDomainKey,
  routerKey: defaultRouterKey,
  maxRetries: 5,
  debug: true,
};

function ParsePardotOptions(opts: PardotMagicalOptions): PardotMagicalOptions {
  return ParseOptions(defaultOptions, opts) as PardotMagicalOptions;
}

export default ParsePardotOptions;
