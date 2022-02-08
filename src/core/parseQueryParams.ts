import DebugLog from "./debugLog";
import ParseOptions from "./types/ParseOptions";

export default function ParseQueryParams(opts: ParseOptions): Record<string, any> | null {
  // Parse query params
  let valid = false;
  const urlParams = new URLSearchParams(window.location.search);
  const data: Record<string, any> = {};
  urlParams.forEach((value: string, key: string) => {
    if (key.toLowerCase().includes(opts.requiredQueryField)) valid = true;
    data[key] = value;
  });
  if (!valid) {
    DebugLog(opts.debug, `Query params do not include required field ${opts.requiredQueryField}`);
    return null;
  }
  return data;
}
