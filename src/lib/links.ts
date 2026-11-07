export function getLinkProps(href: string) {
  return href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}
