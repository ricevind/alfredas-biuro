export function cssPartial(parts, ...vars) {
  return String.raw({raw: parts}, ...vars)
}
