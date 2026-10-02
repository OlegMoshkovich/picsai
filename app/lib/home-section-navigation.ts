export function scrollToHomeSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function onHomeSectionLinkClick(
  event: { preventDefault: () => void },
  href: string
): void {
  const id = href.split("#")[1];
  if (!id || window.location.pathname !== "/") return;
  event.preventDefault();
  scrollToHomeSection(id);
  const next = `/#${id}`;
  if (`${window.location.pathname}${window.location.hash}` !== next) {
    history.pushState(null, "", next);
  }
}
