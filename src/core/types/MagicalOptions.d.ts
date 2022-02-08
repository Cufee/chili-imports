type MagicalOptions = {
  withCondition?: (lead: Record<string, any>) => boolean;
  domain: string;
  router: string;
  debug: boolean;
};
export default MagicalOptions;
