const METRO_BUNDLE_URL_PATTERN = /\.bundle\?(?:[^#]*&)?platform=/;

export const isMetroBundleUrl = (url: string | null | undefined): boolean =>
  Boolean(url && METRO_BUNDLE_URL_PATTERN.test(url));
