import { MagicalOptions } from "./types";

const domainKey = "CPTenantDomain";
const routerKey = "CPTenantRouter";

const defaultOptions: MagicalOptions = {
  domainKey: domainKey,
  routerKey: routerKey,
  maxRetries: 5,
  debug: true,
};

function ParseOptions(opts: MagicalOptions): MagicalOptions {
  const options: MagicalOptions = {
    ...defaultOptions,
    ...opts,
  };
  return options;
}

export default ParseOptions;
