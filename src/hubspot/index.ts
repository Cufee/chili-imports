import AddFormSubmitListener from "./addFormSubmitListener";
import AddQueryParamsSubmitHandler from "./addQueryParamsSubmitHandler";
import AddFormSubmitRedirectParams from "./addFormSubmitRedirectParams";
// @ts-ignore
const magical = window["Magical"] || {};

const hubspotMagical = {
  HubspotFormRegisterSubmit: AddFormSubmitListener,
  HubspotSetupDataRedirect: AddFormSubmitRedirectParams,
  HubspotCatchSubmitDataRedirect: AddQueryParamsSubmitHandler,
};

// @ts-ignore
window["Magical"] = { ...magical, ...hubspotMagical };
