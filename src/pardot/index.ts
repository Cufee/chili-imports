import AddFinalDataListener from "./addPardotDataListener";
import EmitFormSuccessEvent from "./emitFormSuccess";
import FormSetup from "./formSetup";

export const Magical = {
  PardotFormSetup: FormSetup,
  PardotFormComplete: EmitFormSuccessEvent,
  PardotFormRegisterSubmit: AddFinalDataListener,
};
