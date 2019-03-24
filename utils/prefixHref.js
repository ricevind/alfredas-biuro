export function prefixHref(parts, ...vars) {
  let safeParts = parts;
  if (!Array.isArray(parts)) {
    safeParts = [parts];
  }
  return process.env.BACKEND_URL + String.raw({ raw: safeParts }, ...vars);
}
