function ParseOptions(defaultOpts: Record<string, any>, opts: Record<string, any>): Record<string, any> {
  const options = {
    ...defaultOpts,
    ...opts,
  };
  return options;
}

export default ParseOptions;
