import React from "react";
import { gsap } from "gsap";

export type MenuItemData = {
  link: string;
  text: string;
};

export type FlowingMenuProps = {
  items: MenuItemData[];
  animated?: boolean;
};

const animationDefaults = { duration: 0.55, ease: "expo.out" as const };

function findClosestEdge(
  mouseX: number,
  mouseY: number,
  width: number,
  height: number
): "top" | "bottom" {
  const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
  const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
  return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
}

function MenuItem({
  link,
  text,
  animated,
  isFirst,
}: MenuItemData & { animated: boolean; isFirst: boolean }) {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!animated) return;
    if (!itemRef.current || !overlayRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(overlayRef.current, { y: edge === "top" ? "-101%" : "101%" }).to(
      overlayRef.current,
      { y: "0%" }
    );
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!animated) return;
    if (!itemRef.current || !overlayRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.to(overlayRef.current, {
      ...animationDefaults,
      y: edge === "top" ? "-101%" : "101%",
    });
  };

  return (
    <div
      ref={itemRef}
      className={[
        "relative overflow-hidden",
        isFirst ? "border-t" : "",
        "border-b border-[#f9f9f9]/20",
        "bg-[#0f0f0f]",

        "flex-1 min-h-0",

        "sm:flex-none sm:min-h-[92px]",
      ].join(" ")}
    >
      {/* Overlay (hover) invierte colores */}
      <div
        ref={overlayRef}
        className="
          pointer-events-none absolute inset-0
          bg-[#f9f9f9]
          translate-y-[101%]
        "
      />

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={[
          "absolute inset-0",
          "group z-10 flex items-center justify-center",
          "px-6",
          "transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9f9f9]/40",
          "text-[#f9f9f9]",
          animated ? "hover:text-[#0f0f0f]" : "",
        ].join(" ")}
      >
        <span
          className={[
            "text-center uppercase",
            "font-black tracking-wide",
            "text-xl sm:text-2xl",
            "leading-none",
          ].join(" ")}
        >
          {text}
        </span>
      </a>
    </div>
  );
}

export default function FlowingMenu({ items, animated = true }: FlowingMenuProps) {
  return (
    <nav className="h-full flex flex-1 min-h-0 flex-col">
      {items.map((item, idx) => (
        <MenuItem key={item.text} {...item} animated={animated} isFirst={idx === 0} />
      ))}
    </nav>
  );
}
