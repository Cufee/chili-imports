import AddFinalDataListener from "./addDataListener";
import EmitFormSuccessEvent from "./emitFormSuccess";
import FormSetup from "./formSetup";

declare global {
  interface Window {
    Magical: Record<string, any>;
  }
}

const magical = window.Magical || {};

const pardotMagical = {
  PardotFormSetup: FormSetup,
  PardotFormComplete: EmitFormSuccessEvent,
  PardotFormRegisterSubmit: AddFinalDataListener,
};

// @ts-ignore
window.Magical = { ...magical, ...pardotMagical };
