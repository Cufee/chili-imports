import AddQueryParamsSubmitHandler from "../hubspot/addQueryParamsSubmitHandler";

declare global {
  interface Window {
    Magical: Record<string, any>;
  }
}

const magical = window.Magical || {};

const universalMagical = {
  RegisterUniversalQuerySubmit: AddQueryParamsSubmitHandler,
};

window.Magical = { ...magical, ...universalMagical };
