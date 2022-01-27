import AddFinalDataListener from "./addDataListener";
import EmitFormSuccessEvent from "./emitFormSuccess";
import FormSetup from "./formSetup";

// @ts-ignore
const magical = window["Magical"] || {};

const pardotMagical = {
  PardotFormSetup: FormSetup,
  PardotFormComplete: EmitFormSuccessEvent,
  PardotFormRegisterSubmit: AddFinalDataListener,
};

// @ts-ignore
window["Magical"] = { ...magical, ...pardotMagical };
