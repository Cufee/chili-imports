type MagicalOptions = {
  withCondition?: (lead: Record<string, any>) => boolean;
  passthroughOptions?: Record<string, any>;
  requiredQueryField?: string;
  debug?: boolean;
  domain: string;
  router: string;
};
export default MagicalOptions;
