import MagicalOptions from "./MagicalOptions";
export default interface ParseOptions {
  requiredQueryField?: string;
  debug?: boolean;

  [key: string]: any;
}
