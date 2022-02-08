import ParseOptions from "../core/parseOptions";
import ParseQueryParams from "../core/parseQueryParams";
import MagicalOptions from "../core/types/MagicalOptions";

const defaultOpts: MagicalOptions = {
  debug: true,
} as MagicalOptions;

function ManualQueryParamsSubmit(ChiliPiperFunction: (domain: string, router: string, opts: any) => void, options: MagicalOptions = {} as MagicalOptions): () => void {
  const opts = ParseOptions(defaultOpts, options);

  if (!ChiliPiperFunction) {
    console.error("ChiliPiperFunction must be set");
    return;
  }
  if (!opts.domain || !opts.router) {
    console.error("domain and router must be set");
    return;
  }

  return () => {
    const data = ParseQueryParams(opts);
    if (!data) return;

    ChiliPiperFunction(opts.domain, opts.router, {
      ...(opts.passthroughOptions || {}),
      lead: data,
      map: true,
    });
  };
}

export default ManualQueryParamsSubmit;
