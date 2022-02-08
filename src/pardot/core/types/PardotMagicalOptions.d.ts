import MagicalOptions from "../../../core/types/MagicalOptions";

export default interface PardotMagicalOptions extends Omit<MagicalOptions, "domain" | "router"> {
  maxRetries: number;
  domainKey: string;
  routerKey: string;
}
