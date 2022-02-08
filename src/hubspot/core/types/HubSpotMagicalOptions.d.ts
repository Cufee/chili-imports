import MagicalOptions from "../../../core/types/MagicalOptions";

export interface HubspotMagicalOptions extends MagicalOptions {
  formId?: string | string[];
  requiredField: string;
}
