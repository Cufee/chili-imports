import DebugLog from "./debugLog";

export default function ParseQueryParams(opts: Record<string, any>): Record<string, any> | null {
  // Parse query params
  let valid = false;
  const urlParams = new URLSearchParams(window.location.search);
  const data: Record<string, any> = {};
  urlParams.forEach((value: string, key: string) => {
    if (key.toLowerCase().includes(opts.requiredField)) valid = true;
    data[key] = value;
  });
  if (!valid) {
    DebugLog(opts.debug, `Query params do not include required field ${opts.requiredField}`);
    return null;
  }
  return data;
}
