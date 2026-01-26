import React from "react";
import FlowingMenu from "./FlowingMenu";
import type { MenuItemData } from "./FlowingMenu";

type LinkItem = {
  label: string;
  href: string;
};

type LinksSectionProps = {
  links: LinkItem[];
  className?: string;
};

function shouldAnimateMenu(): boolean {
  if (typeof window === "undefined") return false;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hover = window.matchMedia("(hover: hover)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const isMobileWidth = window.matchMedia("(max-width: 640px)").matches;

  return !reduced && hover && finePointer && !isMobileWidth;
}

function LinksSection({ links, className }: LinksSectionProps) {
  const [animatedMenu, setAnimatedMenu] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mqMobile = window.matchMedia("(max-width: 640px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqHover = window.matchMedia("(hover: hover)");
    const mqPointer = window.matchMedia("(pointer: fine)");

    const update = () => setAnimatedMenu(shouldAnimateMenu());

    update();

    mqMobile.addEventListener?.("change", update);
    mqReduced.addEventListener?.("change", update);
    mqHover.addEventListener?.("change", update);
    mqPointer.addEventListener?.("change", update);

    return () => {
      mqMobile.removeEventListener?.("change", update);
      mqReduced.removeEventListener?.("change", update);
      mqHover.removeEventListener?.("change", update);
      mqPointer.removeEventListener?.("change", update);
    };
  }, []);

  const items: MenuItemData[] = links.map((l) => ({
    link: l.href,
    text: l.label,
  }));

  return (
    <div className={`flex-1 min-h-0 h-full overflow-hidden ${className ?? ""}`}>
      <FlowingMenu items={items} animated={animatedMenu} />
    </div>
  );
}

export default LinksSection;
