/**
 * Resolves paths to files in /public for GitHub Pages subpath (Vite base).
 */
export function publicAsset(path) {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}
