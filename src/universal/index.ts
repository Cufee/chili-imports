import ParseQueryParams from "../core/parseQueryParams";
import AddQueryParamsSubmitHandler from "../hubspot/addQueryParamsSubmitHandler";
import ManualQueryParamsSubmit from "./manualQueryParamsSubmit";

declare global {
  interface Window {
    Magical: Record<string, any>;
  }
}

const magical = window.Magical || {};

const universalMagical = {
  RegisterUniversalQuerySubmit: AddQueryParamsSubmitHandler,
  SubmitFromQueryParams: ManualQueryParamsSubmit,
  ParseQueryParams: ParseQueryParams,
};

window.Magical = { ...magical, ...universalMagical };
