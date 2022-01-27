function DebugLog(debug: boolean, message: string) {
  if (debug) {
    console.debug(message);
  }
}

export default DebugLog;
