import AddFormSubmitListener from "./addFormSubmitListener";
import AddQueryParamsSubmitHandler from "./addQueryParamsSubmitHandler";
import AddFormSubmitRedirectParams from "./addFormSubmitRedirectParams";

declare global {
  interface Window {
    Magical: Record<string, any>;
  }
}

const magical = window.Magical || {};

const hubspotMagical = {
  HubspotFormRegisterSubmit: AddFormSubmitListener, // Legacy
  HubspotRunOnSubmit: AddFormSubmitListener,
  HubspotSetupDataRedirect: AddFormSubmitRedirectParams,
  HubspotCatchSubmitDataRedirect: AddQueryParamsSubmitHandler,
};

window.Magical = { ...magical, ...hubspotMagical };
