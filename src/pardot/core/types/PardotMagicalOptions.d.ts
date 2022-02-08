export default interface PardotMagicalOptions {
  withCondition?: (lead: Record<string, any>) => boolean;
  maxRetries: number;
  domainKey: string;
  routerKey: string;
  debug: boolean;
}
