import AddFinalDataListener from "./addPardotDataListener";
import EmitFormSuccessEvent from "./emitFormSuccess";
import FormSetup from "./formSetup";

const Magical = {
  PardotFormSetup: FormSetup,
  PardotFormComplete: EmitFormSuccessEvent,
  PardotFormRegisterSubmit: AddFinalDataListener,
};

// @ts-ignore
window["Magical"] = Magical;

export default Magical;
