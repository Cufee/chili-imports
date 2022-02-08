import ParseOptions from "../core/parseOptions";
import ParseQueryParams from "../core/parseQueryParams";
import MagicalOptions from "../core/types/MagicalOptions";

const defaultOpts: MagicalOptions = {
  debug: true,
} as MagicalOptions;

async function AddQueryParamsListener(ChiliPiperFunction: (domain: string, router: string, opts: any) => void, options: MagicalOptions = {} as MagicalOptions) {
  const opts = ParseOptions(defaultOpts, options);

  if (!ChiliPiperFunction) {
    console.error("ChiliPiperFunction must be set");
    return;
  }
  if (!opts.domain || !opts.router) {
    console.error("domainKey and routerKey must be set");
    return;
  }

  const data = ParseQueryParams(opts);
  if (!data) return;

  // Check custom conditional logic
  if (typeof opts.withCondition === "function" && !opts.withCondition(data)) {
    return;
  }

  ChiliPiperFunction(opts.domain, opts.router, {
    lead: data,
    map: true,
  });
}

export default AddQueryParamsListener;
