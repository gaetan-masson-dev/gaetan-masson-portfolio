/**
 * Shared link appearance: matches global `a` styles (accent + underline + hover).
 * Use for nav (inactive), inline links, footer utilities, and MDX.
 */
export const linkTextClass =
  'text-accent underline decoration-accent underline-offset-[0.18em] hover:text-accent-hover hover:decoration-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm'

/** Home work list: title reads as a heading; underline on hover only for affordance. */
export const caseStudyTitleLinkClass =
  'text-default no-underline font-semibold underline-offset-[0.18em] decoration-default hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm'

const navFocusVisibleClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm'

/** Primary navigation: current route reads as plain text; remains a focusable link with aria-current="page". */
export function navLinkClass(active: boolean): string {
  if (active) {
    return `text-default font-medium no-underline ${navFocusVisibleClass}`
  }
  return `${linkTextClass} font-medium`
}

export function workNavActive(pathname: string): boolean {
  return pathname === '/' || pathname.startsWith('/work')
}

export function aboutNavActive(pathname: string): boolean {
  return pathname === '/about' || pathname.startsWith('/about/')
}

export function contactNavActive(pathname: string): boolean {
  return pathname === '/contact' || pathname.startsWith('/contact/')
}
