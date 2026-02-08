const DEFAULT_SITE_URL = "https://projektova-dokumentace.com";

export function getSiteUrl(): string {
  const rawUrl = (process.env.NEXT_PUBLIC_APP_URL ?? DEFAULT_SITE_URL)
    .trim()
    .replace(/\/+$/, "");

  try {
    const parsed = new URL(rawUrl);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
