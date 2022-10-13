export * from './typeHelper';

export function setQueryParam(url: string, key: string, value: string) {
  const urlObj = new URL(url);
  urlObj.searchParams.set(key, value);
  return urlObj.href;
}

export function getQueryParam(url: string, key: string) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get(key)
    ? decodeURIComponent(urlObj.searchParams.get(key))
    : null;
}

export function setPath(url: string, pathname: string) {
  const urlObj = new URL(url);
  urlObj.pathname = pathname;
  return urlObj.href;
}

export function hasOwn(obj: any, key: string | symbol) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
